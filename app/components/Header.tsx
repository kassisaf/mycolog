import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 mb-3 flex w-full flex-row items-center justify-between bg-zinc-600 pl-4 shadow-xl sm:pr-2 sm:pl-8">
      <h1 className="text text-3xl font-bold">MycoLog</h1>
      <button className="cursor-pointer p-2 text-5xl hover:bg-zinc-500">
        🍄
      </button>
    </div>
  );
};

export default Header;
