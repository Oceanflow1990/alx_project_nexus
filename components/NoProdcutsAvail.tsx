import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const NoProdcutsAvail = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center just py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Product not available at this time
        </h2>
      </motion.div>
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        sorry at this point, no product matching on {""}
        <span className="text-base font-semibold text-darkColor">
          {selectedTab}
        </span>
      </motion.p>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="flex items-center space-x-2 text-blue-600"
      >
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>Kindly check back shortly, We&apos;re currently restocking</span>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-sm text-gray-600"
        >
          Explore our other amazing products
        </motion.p>
      </motion.div>
    </div>
  );
};

export default NoProdcutsAvail;
