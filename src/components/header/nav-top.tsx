import React from "react";

import Link from "next/link";
import {
  ButtonIconAdd,
  ButtonIconEdit,
  ButtonIconDelete,
  ButtonIconBack,
} from "../ui/button-top-nav";

const NavContent = () => {
  return (
    <div className="flex gap-2">
      <ButtonIconBack />
      <ButtonIconDelete />
      <ButtonIconEdit />
      <ButtonIconAdd />
    </div>
  );
};

export default NavContent;
