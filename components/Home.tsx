"use client";

import React from "react";
import {
  FaLeaf,
  FaHandsHelping,
  FaMapMarkerAlt,
  FaUsers,
  FaHeartbeat,
  FaComments,
} from "react-icons/fa";
import { useUser } from "@clerk/nextjs";

const features = [
  {
    icon: <FaLeaf />,
    title: "Reduce Food Waste",
    description:
      "Make a positive impact by donating extra food to those in need.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Support",
    description:
      "Help the local community and contribute to social well-being.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Easy Donation",
    description:
      "Find nearby food collection points and drop off your donations.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Promote Health",
    description:
      "Provide nutritious food to those in need to improve their well-being.",
  },
  {
    icon: <FaUsers />,
    title: "Join a Network",
    description:
      "Become part of a network of organizations and individuals fighting food waste.",
  },
  {
    icon: <FaComments />,
    title: "Raise Awareness",
    description:
      "Spread the word about food waste and the importance of donations.",
  },
];

const Home = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  // Assuming you have an API route for saving user data

  if (isSignedIn) {
    fetch("/api/user/save", {
      method: "POST",
      body: JSON.stringify(user),
    });
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div>
        <section className="py-10">
          <div className="container mx-auto text-center">
            <div className="text-center mt-2">
              <h1 className="text-8xl mb-4 font-bold animate-gradient-text">
                Food For All
              </h1>
            </div>
            <p className="text-gray-600 mb-8 text-2xl">
              Donate Surplus foods to the ones who're in real need and help to
              reduce the food wastage.
            </p>
            {isSignedIn && (
              <a
                href={"/manage/donate"}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
              >
                Donate Now
              </a>
            )}
          </div>
        </section>
      </div>

      <div className="w-full" style={{ backgroundColor: "#dffffd" }}>
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold relative mb-8">
              <span className="border-b-4 border-green-400">
                About Food For All
              </span>
            </h2>
            <p className="text-gray-600 text-xl mb-8">
              Food For All is a platform dedicated to reducing food waste and
              helping those in need. We connect restaurants and event organizers
              with NGOs and orphanages to ensure that surplus food doesn't go to
              waste. Together, we can make a positive impact on the community
              and contribute to social well-being.
            </p>
          </div>
        </section>

        {/* Add a horizontal line */}
        <hr className="border-t-2 border-gray-300 mx-auto" />

        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold relative mb-8">
              <span className="border-b-4 border-green-400">
                Why Choose Food For All?
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <MemoizedFeature key={index} feature={feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Add another horizontal line */}
        <hr className="border-t-2 border-gray-300 mx-auto" />

        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold relative mb-8">
              <span className="border-b-4 border-green-400">
                Food Waste Worldwide
              </span>
            </h2>
            <p className="text-gray-600 text-xl mb-8">
              Food wastage is a global problem. Every year, millions of tons of
              food are wasted, while many people go hungry. Food For All aims to
              be part of the solution by connecting those with surplus food to
              those in need. Together, we can make a difference.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

type Feature = {
  icon: React.JSX.Element;
  title: string;
  description: string;
};

type MemoizedFeatureProps = {
  feature: Feature;
};

// MemoizedFeature component
const MemoizedFeature = React.memo<MemoizedFeatureProps>(({ feature }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border-black hover:shadow-xl hover:scale-105 transition-transform">
    <div className="flex items-center justify-center mb-4">
      <div className="text-2xl text-blue-500 mr-2">{feature.icon}</div>
      <h3 className="text-lg font-semibold">{feature.title}</h3>
    </div>
    <p className="text-gray-600">{feature.description}</p>
  </div>
));
