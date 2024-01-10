import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          Sign Up to Access the Full Features of the Website
        </h1>
        <SignUp />
      </div>
    </div>
  );
};

export default Page;
