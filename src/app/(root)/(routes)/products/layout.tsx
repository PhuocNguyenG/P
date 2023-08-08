"use client"
import React, { Suspense } from "react";
import SpinnerLoading from "../loading";
import { IsAmin } from "@/lib/utils";

const ProductsManagementLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <>
      <Suspense fallback={<SpinnerLoading />}>{IsAmin() ? children : "You are not admin"}</Suspense>
    </>
  );
};

export default ProductsManagementLayout;
