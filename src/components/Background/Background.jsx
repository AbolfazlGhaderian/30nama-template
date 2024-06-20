import React from "react";

export default function Background({ setShowBackground, showBackground }) {
  const closeItem = () => {
    setShowBackground(!showBackground);
  };

  return (
    <div
      className={`w-screen h-screen bg-stone-900/80 fixed top-0 left-0 -z-10 lg:hidden md:flex `}
      onClick={closeItem}
    ></div>
  );
}
