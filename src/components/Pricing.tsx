"use client";

import { CheckIcon } from "lucide-react";
// components/Pricing.tsx
import { useState } from "react";

type PricingPlan = {
  name: string;
  desc: string;
  action: string;
  price: string;
  features: string[];
};

type PricingOptions = {
  monthly: PricingPlan[];
  yearly: PricingPlan[];
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  const pricingPlans: PricingOptions = {
    monthly: [
      {
        name: "Basic",
        desc: "Have a go and test your superpowers",
        price: "$0",
        action: "Signup for free",
        features: [
          "2 Users",
          "2 Files",
          "Public Share & Comments",
          "Chat Support",
          "New income apps",
        ],
      },
      {
        name: "Beginner",
        desc: "Experiment the power of infinite possibilites",
        price: "$20",
        action: "Go to pro",
        features: [
          "4 Users",
          "All apps",
          "Unlimited editable experts",
          "Folders and collaboration",
          "All incoming apps",
        ],
      },
      {
        name: "Amatuer",
        desc: "Unveil new superpowers and join the design League",
        price: "$50",
        action: "Go to business",
        features: [
          "All features of pro plan",
          "Account success Manager",
          "Single Sign-On(SSO)",
          "Co-conception program",
          "Collaboration-Soon",
        ],
      },
    ],
    yearly: [
      {
        name: "Free",
        desc: "Have a go and test your superpowers",
        price: "$0",
        action: "Signup for free",
        features: [
          "2 Users",
          "2 Files",
          "Public Share & Comments",
          "Chat Support",
          "New income apps",
        ],
      },
      {
        name: "Pro",
        desc: "Experiment the power of infinite possibilites",
        price: "$20",
        action: "Go to pro",
        features: [
          "4 Users",
          "All apps",
          "Unlimited editable experts",
          "Folders and collaboration",
          "All incoming apps",
        ],
      },
      {
        name: "Business",
        desc: "Unveil new superpowers and join the design League",
        price: "$50",
        action: "Go to business",
        features: [
          "All features of pro plan",
          "Account success Manager",
          "Single Sign-On(SSO)",
          "Co-conception program",
          "Collaboration-Soon",
        ],
      },
    ],
  };

  return (
    <div className=" ">
      <div className="max-w-5xl mx-auto text-center justify-center items-center  flex flex-col gap-8 font-sans">
        {/* Tabs */}
        <div className="flex justify-center items-center gap-1 p-2 bg-white rounded-lg ">
          {(["monthly", "yearly"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`btn btn-sm md:btn-md border-none ${
                activeTab === tab
                  ? "bg-[#F96C3B] text-white hover:bg-[#F96C3B]/80"
                  : "bg-white text-gray-800 hover:bg-white/80 "
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {pricingPlans[activeTab].map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition"
            >
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                {plan.name}
              </h3>
              <p className="text-sm md:text-base my-3">{plan.desc}</p>
              <p className="text-3xl font-bold text-gray-800 mb-6">
                {plan.price}
                <span className="text-xs md:text-sm font-bold text-[#F96C3B]">
                  /sub
                </span>
              </p>
              <ul className="text-gray-600 space-y-2 md:space-y-4 mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm md:text-base"
                  >
                    <div className="p-1 rounded-full bg-[#F96C3B] flex items-center justify-center">
                      <CheckIcon className="h-3 w-3  text-white " />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className=" bg-[#F96C3B] text-white btn btn-sm md:btn-md w-full font-bold  hover:bg-orange-600 mx-2 ">
                {plan.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
