import React from "react";
import { Link } from "react-router-dom";
import { BiLogoInstagram, BiLogoTelegram, BiLogoDiscord } from "react-icons/bi";
import { RiFireLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="w-full h-full bg-stone-900 flex flex-col justify-center items-center">
      {/* footer list */}
      <div className="w-10/12 flex md:flex-row flex-col justify-center md:items-start items-center py-20">
        <div className="w-52 mx-5">
          <h5 className="text-white text-center text-xl">عناوین برتر</h5>
          <span className="w-full h-[.15rem] block bg-red-500 rounded-md my-4"></span>
          <ul className="text-white flex flex-col">
            <Link
              to={"/top-movie-night-movies"}
              className="w-full py-1 rounded-md text-center bg-gray-800 text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              100 فیلم برتر 30 نما
            </Link>
            <Link
              to={"/top-series-night-movies"}
              className="w-full py-1 rounded-md mt-4 text-center bg-gray-800 text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              100 سریال برتر 30 نما
            </Link>
            <Link
              to={"/top-movie-imdb"}
              className="w-full py-1 rounded-md mt-4 text-center bg-gray-800 text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              250 فیلم برتر IMDb
            </Link>
            <Link
              to={"/top-series-imdb"}
              className="w-full py-1 rounded-md mt-4 text-center bg-gray-800 text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              250 سریال برتر IMDb
            </Link>
          </ul>
        </div>
        <div className="w-52 mx-5 md:mt-0 mt-4">
          <h5 className="text-white text-center text-xl">اخبار و مقالات</h5>
          <span className="w-full h-[.15rem] block bg-red-500 rounded-md my-4"></span>
          <ul className="text-white flex flex-col">
            <Link
              to={"/rules"}
              className="w-full py-1 rounded-md text-center bg-gray-800 text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              اخبار
            </Link>
            <Link
              to={"/contac-us"}
              className="w-full py-1 rounded-md mt-4 text-center bg-gray-800 text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              نقد، بررسی و مصاحبه
            </Link>
          </ul>
        </div>
        <div className="w-52 mx-5 md:mt-0 mt-4">
          <h5 className="text-white text-center text-xl">30 نما</h5>
          <span className="w-full h-[.15rem] block bg-red-500 rounded-md my-4"></span>
          <ul className="text-white flex flex-col">
            <Link
              to={"/rules"}
              className="w-full py-1 rounded-md text-center bg-gray-800 text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              قوانین
            </Link>
            <Link
              to={"/contac-us"}
              className="w-full py-1 rounded-md mt-4 text-center bg-gray-800 text-gray-500 hover:bg-red-600 hover:text-white transition-all duration-500"
            >
              تماس با ما
            </Link>
          </ul>
        </div>
        <div className="w-32 h-32 grid grid-cols-2 md:mt-0 mt-4">
          <Link to={"/"} className="w-14 h-14">
            <BiLogoInstagram
              size={32}
              className="w-full h-full p-4 my-2 text-white hover:text-slate-400 transition-all duration-300 border border-dashed rounded-full"
            />
          </Link>
          <Link to={"/"} className="w-14 h-14">
            <BiLogoTelegram
              size={32}
              className="w-full h-full p-4 my-2 text-white hover:text-slate-400 transition-all duration-300 border border-dashed rounded-full"
            />
          </Link>
          <Link to={"/"} className="w-14 h-14">
            <BiLogoDiscord
              size={32}
              className="w-full h-full p-4 my-2 text-white hover:text-slate-400 transition-all duration-300 border border-dashed rounded-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
