'use client';

import { Navbar } from "@/components";
import Image from "next/image";
import React from "react";
import pic from "@/assets/pic5.jpg";

const Page = () => {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src={pic}
        alt="Descriptive text here"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-5xl">COMING SOON</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;
