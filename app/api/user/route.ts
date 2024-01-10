import { NextRequest } from "next/server";
import UserModel from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoose";

export async function POST(req: NextRequest) {
  try {
    // Connect to the database when the application starts
    await connectToDB();
    const body = await req.json();

    let user = await UserModel.findOne({ id: body.id });

    if (!user) {
      // Use `lean()` to return a plain JavaScript object
      user = await UserModel.create(body);
    }

    return new Response(JSON.stringify(user));
  } catch (error) {
    console.error("POST error:", error);
    return new Response("An error occurred.", { status: 500 });
  }
}
