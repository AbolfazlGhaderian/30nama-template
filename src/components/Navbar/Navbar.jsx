import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { IoEnterOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ setShowMobileMenu, showMobileMenu }) {
  const location = useLocation();
  const [userLogin, setUserLogin] = useState();

  const scrollToTop = () => {
    if (location.pathname === "/") {
      let scroll = Math.floor(window.scrollY);
      let scrollToTop = setInterval(() => {
        scroll -= 100;
        if (scroll <= 0) {
          window.scrollTo(0, 0);
          clearInterval(scrollToTop);
        } else {
          window.scrollTo(0, scroll);
        }
      }, 30);
    }
  };

  const showMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const userName = localStorage.getItem("username");
    setUserLogin(userName);
  }, [localStorage.getItem("username")]);

  return (
    <div className="w-full h-20 bg-black/50 backdrop-blur fixed left-0 bottom-0 z-40 lg:hidden">
      <ul className="w-full h-full flex justify-around items-center">
        <li className="w-1/3" onClick={scrollToTop}>
          <Link
            to={"/"}
            className={`w-full flex flex-col justify-center items-center  ${
              location.pathname === "/" ? "text-red-800" : "text-white"
            } `}
          >
            <GoHome size={32} />
            <span className="text-center font-bold">خانه</span>
          </Link>
        </li>
        <li
          className="w-1/3 flex flex-col justify-center items-center text-white"
          onClick={showMenu}
        >
          <IoIosMenu size={32} />
          <span className="text-center">منو</span>
        </li>
        <li className="w-1/3">
          {userLogin ? (
            <Link
              to={"/profile"}
              className={`w-full flex flex-col justify-center items-center  ${
                location.pathname === "/login" ? "text-red-800" : "text-white"
              } `}
            >
              <AiOutlineUser size={32} />
              <span className="text-center">پروفایل</span>
            </Link>
          ) : (
            <Link
              to={"/login"}
              className={`w-full flex flex-col justify-center items-center  ${
                location.pathname === "/login" ? "text-red-800" : "text-white"
              } `}
            >
              <IoEnterOutline size={32} />
              <span className="text-center">ورود</span>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
