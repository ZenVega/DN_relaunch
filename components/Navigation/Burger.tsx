import React from "react";
interface BurgerProps {
  open: boolean;
  setOpen: () => void;
}

const Burger = ({ open, setOpen }: BurgerProps) => {
  return (
    <button
      className="absolute top-4 right-4 rounded-full bg-black w-10 h-10 z-20"
      onClick={setOpen}
    >
      {!open ? (
        <div className="flex flex-col gap-1 items-center justify-center h-full">
          <div className="bg-white h-0.5 w-5" />
          <div className="bg-white h-0.5 w-5" />
          <div className="bg-white h-0.5 w-5" />
        </div>
      ) : (
        <span className="text-white font-inter text-xl font-semibold">X</span>
      )}
    </button>
  );
};

export default Burger;
