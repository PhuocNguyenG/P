"use client";

import React from "react";
import Navbar from "@/components/header/navbar";
import LeftSideBar from "@/components/header/left-side-bar";
import { Suspense } from "react";
import SpinnerLoading from "@/app/(root)/(routes)/loading";
import MaskLoginLoading from "@/components/ui/mask-login";
import { IsLoadingLogin } from "@/lib/utils";

const ProductsManagementLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="flex h-screen w-full flex-col">
        <Navbar />

        <div className=" flex-1">
          <div className="flex flex-row h-full">
            <div
              className="w-1/5 max-w-[170px] items-center pt-2 pb-2 m-3 rounded-xl
               shadow-for-all
               bg-sky
              "
            >
              <LeftSideBar />
            </div>
            <div className="flex flex-1 p-3 m-3 ml-1 rounded-xl shadow-for-all bg-sky flex-col">
              <Suspense fallback={<SpinnerLoading />}>{children}</Suspense>
            </div>
          </div>
        </div>
        {IsLoadingLogin() && <MaskLoginLoading />}
      </div>
    </>
  );
};

export default ProductsManagementLayout;
