import UserModel from "@/lib/models/User";
import { getUser, mergeArraysAndRemoveDuplicates } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const user = await getUser();
    const food = await req.json();

    const dbUser = await UserModel.findOne({ id: user.id });

    // Set the inCart property directly on the food object
    food.inCart = true;

    // Merge the arrays and remove duplicates using Set
    const items = mergeArraysAndRemoveDuplicates(dbUser.addedToCart, [food]);

    // Update the addedToCart array directly
    dbUser.addedToCart = Array.from(items);

    await dbUser.save();

    return new Response("OK");
  } catch (error) {
    // Handle and log the error appropriately
    console.error("POST error:", error);
    return new Response("An error occurred.", { status: 500 });
  }
}
