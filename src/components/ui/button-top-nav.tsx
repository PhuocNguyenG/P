import { Button } from "@nextui-org/react";
import React from "react";
import {
  MdOutlineAddBox,
  MdOutlineDelete,
  MdOutlineEdit,
} from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export const ButtonIconAdd = () => {
  return (
    <Button
      className="p-1"
      color="default"
      variant="ghost"
      startContent={<MdOutlineAddBox size={25} />}
    >
      New
    </Button>
  );
};

export const ButtonIconDelete = () => {
  return (
    <Button
      className="p-1"
      color="default"
      variant="ghost"
      startContent={<MdOutlineDelete size={24} />}
    >
      Delete
    </Button>
  );
};

export const ButtonIconEdit = () => {
  return (
    <Button
      className="p-0"
      color="default"
      variant="ghost"
      startContent={<MdOutlineEdit size={21} />}
    >
      Edit
    </Button>
  );
};

export const ButtonIconBack = () => {
  const route = useRouter();
  return (
    <Button
      className="p-0"
      color="default"
      variant="ghost"
      startContent={<IoMdArrowRoundBack size={21} />}
      onPress={route.back}
    >
      Back
    </Button>
  );
};
