import UserModel from "@/lib/models/User";
import { getUser } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const user = await getUser();
    const itemsToAdd = await req.json();

    const dbUser = await UserModel.findOne({ id: user.id });

    dbUser.foodItems = [...itemsToAdd];
    await dbUser.save();

    return new Response(JSON.stringify(dbUser.foodItems));
  } catch (error) {
    console.error("POST error:", error);
    return new Response("An error occurred.", { status: 500 });
  }
}

export async function GET() {
  try {
    const user = await getUser();
    return new Response(JSON.stringify(user?.foodItems));
  } catch (error) {
    console.error("GET error:", error);
    return new Response("An error occurred.", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const user = await getUser();
    const itemsToRemove = await req.json();

    const dbUser = await UserModel.findOne({ id: user.id });

    dbUser.foodItems = dbUser.foodItems.filter(
      (item: any) => !itemsToRemove.includes(item)
    );
    await dbUser.save();

    return new Response(JSON.stringify(dbUser.foodItems));
  } catch (error) {
    console.error("DELETE error:", error);
    return new Response("An error occurred.", { status: 500 });
  }
}
