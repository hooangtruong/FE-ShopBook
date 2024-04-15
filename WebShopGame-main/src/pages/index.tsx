import { Inter } from "next/font/google";
import React from "react";
import HomePage from "./hompage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-[#f3f4f6] py-8">
      <HomePage />
    </main>
  );
}
