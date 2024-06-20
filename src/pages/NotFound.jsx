import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-auto flex lg:flex-row flex-col justify-center items-center">
      <img
        src="/assets/not-found/404.png"
        alt="صففحه مورد نظر پیدا نشد"
        className="w-[30rem] h-[30rem] select-none"
        draggable="false"
      />
      <div className="flex flex-col justify-center items-center">
        <span className="text-white text-4xl">صفحه مورد نظر یافت نشد</span>
        <Link
          to={"/"}
          className="w-48 h-12 text-white border-2 border-blue-500 flex justify-center items-center mt-5 rounded-md hover:bg-blue-500 transition-all duration-200"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
