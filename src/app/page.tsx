'use client';

import { Navbar } from "@/components";
import Image from "next/image";
import React from "react";
import pic from "@/assets/pic2.jpg";

const Page = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
        <Image
          height={1000}
          width={1000}
          alt="Background Image"
          src={pic}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-black/80 w-full h-full flex items-center justify-center">
          <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto flex flex-col gap-4 md:gap-6 lg:gap-8 items-center text-center p-4">
            <h5 className="text-white text-xs md:text-sm lg:text-base mb-2">
              DONATE TO CONTRIBUTE
            </h5>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4">
              LET&apos;S BUILD A BETTER WORLD TOGETHER 
            </h1>
            <p className="text-white text-sm md:text-base lg:text-lg">
              Together, we can make a lasting impact on the world around us. By
              contributing to causes that matter, we can improve the lives of
              individuals, families, and communities. Every donation, no matter
              how small, brings us one step closer to our shared goal of
              creating a brighter future for all. Let&apos;s join hands and work
              together to build a better world for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
