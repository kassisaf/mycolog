import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  header,
  children,
}: {
  header?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={twMerge(
        "overflow-hidden rounded-lg bg-zinc-800 shadow-md",
        header && "divide-y divide-zinc-600"
      )}
    >
      {header && (
        <div className="px-4 py-2 text-center sm:p-6">
          <h2 className="text-2xl font-semibold">{header}</h2>
        </div>
      )}
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  );
};

export default Card;
