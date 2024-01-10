import { getUser, removeItemFromUser } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const user = await getUser();
    const food = await req.json();

    await removeItemFromUser(user._id, [food.itemId]);

    return new Response("OK");
  } catch (error) {
    // Handle and log the error appropriately
    console.error("DELETE error:", error);
    return new Response("An error occurred.", { status: 500 });
  }
}
