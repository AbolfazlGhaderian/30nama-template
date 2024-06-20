import React from "react";

export default function AcceptProfileAlert({
  showAccesptAlert,
  saveChanges,
  removeChanges,
}) {
  return (
    <div
      className={`lg:w-2/3 md:w-3/4 sm:w-10/12 w-full h-20 p-4 rounded-t-lg bg-black/80 backdrop-blur-sm lg:left-52 md:left-32 sm:left-14 left-0 fixed flex justify-between items-center ${
        showAccesptAlert ? "lg:bottom-0 bottom-20" : "-bottom-40"
      } transition-all duration-300`}
    >
      <span className="text-white text-base md:text-xl">
        از تغییرات انجام شده در داشبورد مطمئن هستید؟
      </span>
      <div className=" flex justify-center items-center">
        <button
          className="text-stone-600 text-lg ml-4"
          onClick={() => removeChanges()}
        >
          بازگشت
        </button>
        <button
          className="w-20 h-10 bg-blue-500 text-white text-lg p-4 rounded-md flex justify-center items-center"
          onClick={() => saveChanges()}
        >
          تغییر
        </button>
      </div>
    </div>
  );
}
