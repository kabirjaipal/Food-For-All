"use client";

import React from "react";
import { FaDonate, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const DonateCard = () => {
  const router = useRouter();
  return (
    <a
      href={"/manage/donate"}
      // onClick={() => {
      //   router.push("/manage/donate");
      // }}
      className="bg-blue-300 p-6 rounded-lg shadow-md cursor-pointer"
    >
      <div className="text-2xl mb-4">
        <FaDonate />
      </div>
      <h2 className="text-xl font-semibold mb-2">Donate Surplus Food</h2>
      <p className="text-gray-700">
        Help us rescue surplus food and distribute it to those in need. Your
        contribution can make a real difference.
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li>Reduce food waste and help the environment.</li>
        <li>Provide meals to individuals and families in need.</li>
        <li>
          Join a community of like-minded people making a positive impact.
        </li>
      </ul>
    </a>
  );
};

const BuyCard = () => {
  const router = useRouter();
  return (
    <a
      href="/manage/buy"
      // onClick={() => {
      //   router.push("/manage/buy");
      // }}
      className="bg-green-300 p-6 rounded-lg shadow-md cursor-pointer"
    >
      <div className="text-2xl mb-4">
        <FaShoppingCart />
      </div>
      <h2 className="text-xl font-semibold mb-2">Buy Surplus Food</h2>
      <p className="text-gray-700">
        Shop for high-quality surplus food items at discounted prices. Every
        purchase helps reduce waste and supports the community.
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li>Access a variety of fresh and packaged surplus food items.</li>
        <li>Save money on groceries while supporting a great cause.</li>
        <li>Contribute to reducing food waste and promoting sustainability.</li>
      </ul>
    </a>
  );
};

const Page = () => {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-4 min-h-screen">
        <h1 className="text-4xl font-bold animate-gradient-text text-center mb-6">
          Welcome To Surplus Food Explorer
        </h1>

        <p className="text-lg text-center mb-8">
          At Surplus Food Explorer, we're on a mission to eliminate wastage of food and
          ensure that surplus food reaches those who need it most. Join us in
          making a positive impact on our communities. Click on any of the below available box which suits you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DonateCard />
          <BuyCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
