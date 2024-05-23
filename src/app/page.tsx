'use client';

import { Navbar } from "@/components";
import Image from "next/image";
import React from "react";
import pic from "@/assets/pic2.jpg";

const Page = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-[600px] relative">
       <Image
          height={1000}
          width={1000}
          alt=""
          src={pic}
          className="w-full h-full object-cover"
        /> 

        <div className="absolute top-0 left-0 bg-black/80 w-full h-full ">
          
          <div className="w-3/5 mx-auto flex flex-col gap-8 items-center justify-center h-full z-50">

            <h5 className="text-white text-sm mb-2">DONATE TO CONTRIBUTE</h5>
            <h1 className="text-3xl text-white font-bold mb-4">
              LET&apos;S BUILD A BETTER WORLD TOGETHER
            </h1>
            <p className="text-white text-lg">
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
