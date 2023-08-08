import React from "react";
import { ButtonLeftSide } from "../ui/button-left-side";
import Link from "next/link";
import { IsAmin } from "@/lib/utils";

const LeftSideBar = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <ButtonLeftSide variant={"ghost"} asChild>
        <Link href="/">Dashboard</Link>
      </ButtonLeftSide>
      {IsAmin() && (
        <ButtonLeftSide variant={"ghost"} asChild>
          <Link href="/products">Products</Link>
        </ButtonLeftSide>
      )}
    </div>
  );
};

export default LeftSideBar;
