import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CardIcon = () => {
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBagIcon className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-darkColor text-white w-3.5 h-3.5 rounded-full text-sm font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default CardIcon;
