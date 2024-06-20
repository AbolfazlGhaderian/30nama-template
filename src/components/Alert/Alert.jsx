import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export function SuccessAlert({ title, showAlert, setShowAlert }) {
  return (
    <div
      className={`w-fit h-auto p-4 bg-green-600 flex justify-between items-center rounded-md fixed top-4 z-50 ${
        showAlert ? "md:right-4 right-0" : "-right-96"
      } transition-all duration-300`}
    >
      <span className="text-white">{title}</span>
      <IoCloseOutline
        className="text-white mr-4 cursor-pointer"
        size={24}
        onClick={() => setShowAlert(!showAlert)}
      />
    </div>
  );
}

export function ErrorAlert({ title, showAlert, setShowAlert }) {
  return (
    <div
      className={`w-fit h-auto p-4 bg-red-600 flex justify-between items-center rounded-md fixed top-4 z-50 ${
        showAlert ? "right-4" : "-right-96"
      } transition-all duration-300`}
    >
      <span className="text-white">{title}</span>
      <IoCloseOutline
        className="text-white mr-4 cursor-pointer"
        size={24}
        onClick={() => setShowAlert(!showAlert)}
      />
    </div>
  );
}
export function InfoAlert({ title, showAlert, setShowAlert }) {
  return (
    <div
      className={`w-fit h-auto p-4 bg-yellow-500 flex justify-between items-center rounded-md fixed top-4 z-50 ${
        showAlert ? "right-4" : "-right-96"
      } transition-all duration-300`}
    >
      <span className="text-white">{title}</span>
      <IoCloseOutline
        className="text-white mr-4 cursor-pointer"
        size={24}
        onClick={() => setShowAlert(!showAlert)}
      />
    </div>
  );
}
