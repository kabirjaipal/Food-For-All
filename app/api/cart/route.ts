import { getUser } from "@/lib/utils";

export async function GET() {
  try {
    const user = await getUser();
    return new Response(JSON.stringify(user?.addedToCart));
  } catch (error) {
    // Handle and log the error appropriately
    console.error("GET error:", error);
    return new Response("An error occurred.", { status: 500 });
  }
}
