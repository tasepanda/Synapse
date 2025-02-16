import React from "react";
import History from "../components/matchingHistory";

export default function result() {
  return (
    <div className="grid grid-rows-[20px_5px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2 className="text-3xl font-semibold tracking-tight text-pretty p-8 pb-20 text-gray-900 sm:text-4xl text-center">
        Matching History
      </h2>
      <h2>マッチング日付:2025/1/20</h2>
      <History />
      <h2>マッチング日付:2025/1/14</h2>
      <History />
    </div>
  );
}
