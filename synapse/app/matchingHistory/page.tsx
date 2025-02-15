import React from "react";
import History from "../components/matchingHistory";

export default function result() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl text-center">
        これまでにマッチした人の履歴をここから閲覧できます
      </h2>
      <History />
    </div>
  );
}
