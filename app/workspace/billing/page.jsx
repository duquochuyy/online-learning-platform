import { PricingTable } from "@clerk/nextjs";
import React from "react";

const Billing = () => {
  return (
    <div className="p-10">
        <h2 className="font-bold text-3xl mb-5">Select plan</h2>
      <PricingTable />
    </div>
  );
};

export default Billing;
