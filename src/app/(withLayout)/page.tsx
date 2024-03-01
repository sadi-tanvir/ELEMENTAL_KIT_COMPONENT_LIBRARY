'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";

export default function Home() {
  // redux
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector(state => state.globalReducer);

  return (
    <div className="container min-h-[80vh] mx-auto text-gray-600 flex flex-col justify-start items-center">
      <div className="w-full h-full text-center mt-24 space-y-3">
        <h1 className="text-4xl text-gray-600 font-bold">
          Streamline UI Creation with
          <span className="text-[#ef5777] font-semibold"> React.js | </span>
          <span className="text-[#ef5777] font-semibold"> Next.js</span>

        </h1>
        <h3 className="text-xl text-gray-600 font-semibold">Elevate Your Development Workflow with Tailwind CSS for Dynamic Component Libraries.</h3>
      </div>
      <div className="space-x-4 mt-7">
        <Link href={"/components"} className="py-4 px-7 bg-[#ef5777] rounded-lg text-white">
          Get Started
        </Link>
        <Link href={"/docs"} className="py-4 px-10 bg-gray-600 rounded-lg text-white">
          Docs
        </Link>
      </div>
    </div>
  );
};
