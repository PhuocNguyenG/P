"use client";
import React from "react";

import { Separator } from "@/components/ui/separator";
import { Tooltip } from "@nextui-org/react";

const CategoryPackItem = (props: CategoryPackItemProps) => {
  return (
    <div className="w-[300px] h-[110px] bg-background rounded-xl flex flex-col items-center shadow-for-all p-1 pl-2 pr-2 transition-all hover:bg-accent gap-1">
      <div className="text-4xl"> {props.quantity}</div>
      
      <Separator className="w-1/2 " />

      <Tooltip
        showArrow
        classNames={{
          base: "py-2 px-4 shadow-xl text-primary-foreground bg-primary",
          arrow: "bg-primary",
        }}
        delay={300}
        content={props.name}
      >
        <div className="w-full text-center text-2xl text-ellipsis overflow-hidden truncate">
          {props.name}
        </div>
      </Tooltip>
    </div>
  );
};

interface CategoryPackItemProps {
  name: string;
  quantity: number;
}

export default CategoryPackItem;
