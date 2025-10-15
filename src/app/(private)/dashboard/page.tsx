import Balance from "@/components/features/dashboard/balance";
import ChartCashflow from "@/components/features/dashboard/chart-cashflow";
import ListReview from "@/components/features/dashboard/list-review";
import TopLocation from "@/components/features/dashboard/top-location";
import TopSpender from "@/components/features/dashboard/top-spender";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="space-y-6 select-none">
      <Balance />
      <ChartCashflow />
      <ListReview />
      <div className="grid grid-cols-5 gap-5">
        <div id="top10spender" className="col-span-3">
          <TopSpender />
        </div>
        <div id="top10location" className="col-span-2">
          <TopLocation />
        </div>
      </div>
    </div>
  );
}
