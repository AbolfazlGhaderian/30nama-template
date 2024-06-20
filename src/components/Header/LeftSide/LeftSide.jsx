import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

export default function LeftSide() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userLogin, setUserLogin] = useState();
  const searchRef = useRef(null);

  function focusInput() {
    setShowSearchBox(true);
    setTimeout(() => {
      searchRef.current.focus();
    }, 0);
  }

  useEffect(() => {
    const userName = localStorage.getItem("username");
    setUserLogin(userName);
  }, [localStorage.getItem("username")]);

  return (
    <div className="w-full h-20 flex justify-end items-center xl:pl-16 lg:pl-0 pl-6">
      {/* search box */}
      <div className="w-full h-full flex justify-end items-center lg:left-0 left-0 lg:relative absolute">
        {!showSearchBox && (
          <BsSearch
            className="lg:ml-4 ml-[9.5rem] cursor-pointer text-white"
            onClick={focusInput}
          />
        )}
        <form
          className={`lg:w-96 w-full h-full absolute lg:-left-5 left-0 lg:top-10  ${
            showSearchBox ? "lg:flex top-0" : "lg:hidden -top-96"
          } transition-all duration-300`}
          onSubmit={(e) => e.preventDefault()}
        >
          <button className="absolute lg:-top-[.4rem] top-8 lg:left-12 left-6 z-10 cursor-pointer border-r-2 pr-2 border-stone-500">
            <BsSearch className="text-white" />
          </button>
          <input
            type="text"
            ref={searchRef}
            className="lg:w-11/12 w-full lg:h-auto h-20 absolute lg:-top-5 top-0 p-2 px-12 text-base lg:rounded-md rounded-none bg-stone-900 outline-none lg:focus:outline-2 lg:focus:outline-blue-700 lg:focus:border-b-0 focus:border-b-2 focus:border-b-blue-700 border-stone-800 transition-all duration-200 text-white"
            placeholder="جستجو"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <button
            className="w-fit absolute lg:-top-[.4rem] top-8 lg:left-10 right-4 cursor-pointer border-stone-500"
            onClick={() => {
              setShowSearchBox(false);
              setSearchValue("");
            }}
          >
            <IoMdClose className="text-white text-lg" />
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={"/pricing"}
          className="lg:w-32 w-28 lg:text-base text-sm h-10 flex justify-center items-center px-4 py-1 md:font-semibold lg:ml-4 ml-0 bg-red-500 text-white rounded-md"
        >
          خرید اشتراک
        </Link>
        {userLogin ? (
          <Link
            to={"/profile"}
            className="cursor-pointer hover:bg-stone-900 p-2 rounded-full lg:flex hidden transition-all duration-300"
          >
            <AiOutlineUser className="text-2xl text-white cursor-pointer " />
          </Link>
        ) : (
          <Link
            to={"/login"}
            className="w-16 h-10 lg:flex hidden justify-center items-center px-4 py-1 font-semibold bg-transparent text-white border-2 border-blue-600 rounded-md text-base hover:bg-blue-600 transition-all duration-200"
          >
            ورود
          </Link>
        )}
      </div>
    </div>
  );
}
