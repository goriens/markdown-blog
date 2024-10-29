"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function CopyButton({ id }: { id: string }) {
  const [onCopy, setOnCopy] = useState(false);
  const [onSuccess, setSuccess] = useState(false);

  const handleCopy = async () => {
    const text = document.getElementById(id)?.textContent;
    try {
      await navigator.clipboard.writeText(text!);
      setOnCopy(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={handleCopy}
      className="p-1 hover:scale-105 cursor-pointer hover:bg-zinc-700 rounded-md relative"
    >
      <IoCheckmarkOutline
        className={cn(
          "cursor-pointer transition-all text-green-500",
          onSuccess ? "scale-100" : "scale-0"
        )}
      />
      <div className=" h-full w-full absolute top-0 left-0 flex items-center justify-center">
        <FaRegCopy
          className={`" transition-all ${onCopy ? "scale-0" : "scale-100 "}`}
          onTransitionEnd={() => {
            if (onCopy) {
              setSuccess(true);
            }
          }}
        />
      </div>
    </div>
  );
}
