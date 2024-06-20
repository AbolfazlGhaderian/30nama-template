import React, { useEffect, useState } from "react";
import RightSide from "./RightSide/RightSide";
import LeftSide from "./LeftSide/LeftSide";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(Math.floor(window.scrollY));
    });
  }, []);

  return (
    <>
      <div
        className={`w-full h-auto fixed top-0 flex-col justify-between items-center z-50`}
      >
        <div
          className={`w-full h-auto grid xl:grid-cols-2 lg:grid-cols-1 grid-cols-2 justify-between items-center ${
            scroll === 0
              ? "bg-transparent bg-gradient-to-b from-stone-900"
              : "bg-stone-900/40 backdrop-blur-md"
          } `}
        >
          <RightSide />
          <LeftSide />
        </div>
      </div>
    </>
  );
}
