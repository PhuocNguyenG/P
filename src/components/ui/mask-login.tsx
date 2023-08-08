"use client";
import { Spinner } from "@nextui-org/react";
import React from "react";

const MaskLoginLoading = () => {
  return (
    <div className="bg-[#000000c4] w-screen h-screen absolute">
   
    <div className="flex absolute top-[30vh] left-[50vw] justify-center items-center ">
      <Spinner
        size="sm"
        className="absolute"
        classNames={{
          wrapper: "w-6 h-6",
          circle1: "delay-200",
          circle2: "delay-200",
        }}
      />
      <Spinner
        size="md"
        className="absolute"
        classNames={{
          wrapper: "w-8 h-8",
          circle1: "delay-100",
          circle2: "delay-100",
        }}
      />
      <Spinner
        size="lg"
        classNames={{
          wrapper: "w-10 h-10",
        }}
      />
      <div className="absolute top-[50px]">Loading...</div>
    </div>
    </div>
  );
};

export default MaskLoginLoading;
