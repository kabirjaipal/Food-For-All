import { currentUser } from "@clerk/nextjs";
import { connectToDB } from "./mongoose";
import UserModel from "./models/User";
import { DonatedItem } from "@/types";

export async function getUser() {
  // Connect to the database once during app initialization
  try {
    connectToDB();
    const currentuser = await currentUser();
    if (!currentuser) return null;
    const dbUser = await UserModel.findOne({ id: currentuser?.id });
    if (!dbUser) return null;
    return dbUser;
  } catch (error) {}
}

export function deleteItem(data: DonatedItem[], food: DonatedItem) {
  return data.filter((item) => item.itemId !== food.itemId);
}

export function generateUniqueId() {
  const timestamp = Math.floor(Date.now() / 1000).toString(16);
  const randomValue = Math.floor(Math.random() * 16777215).toString(16);
  return `${timestamp}${randomValue}`.padEnd(24, "0");
}

export function mergeArraysAndRemoveDuplicates(
  previousItems: DonatedItem[],
  newItems: DonatedItem[]
) {
  const itemSet = new Set(previousItems.map((item) => item.itemId));
  const mergedItems = previousItems.slice();

  for (const newItem of newItems) {
    if (!itemSet.has(newItem.itemId)) {
      itemSet.add(newItem.itemId);
      mergedItems.push(newItem);
    }
  }

  return mergedItems;
}

export async function removeItemFromUser(
  userId: string,
  itemIdsToRemove: string[]
) {
  try {
    await UserModel.findByIdAndUpdate(
      userId,
      {
        $pull: { addedToCart: { itemId: { $in: itemIdsToRemove } } },
      },
      { new: true }
    );
  } catch (error) {
    console.error("Error removing items from user:", error);
    throw error;
  }
}

export async function saveUser(user: any) {
  // code
  await connectToDB();
  try {
    const currentUser = {
      name: user?.username || "",
      id: user?.id || "",
      avatar: user?.imageUrl || "",
      email: user?.emailAddresses[0].emailAddress || "",
      foodItems: [],
      addedToCart: [],
    };

    const dbUser = await UserModel.findOne({ id: user?.id });
    if (!dbUser) {
      await UserModel.create(currentUser);
    }
  } catch (error) {
    console.log(error);
  }
}
