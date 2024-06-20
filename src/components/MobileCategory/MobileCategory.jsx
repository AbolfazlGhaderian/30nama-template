import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoVideocam, IoRemoveOutline } from "react-icons/io5";
import { PiTelevisionSimple } from "react-icons/pi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BsArchive } from "react-icons/bs";
import { IoMdClose, IoIosInformationCircleOutline } from "react-icons/io";
import Background from "../Background/Background";

export default function MobileCategory({ setShowMobileMenu, showMobileMenu }) {
  const [selectCategory, setSelectCategory] = useState(null);

  const mainCategory = [
    {
      title: "فیلم",
      icon: <IoVideocam size={24} />,
      url: "/videos",
    },
    {
      title: "سریال",
      icon: <PiTelevisionSimple size={24} />,
      url: "/series",
    },
    {
      title: "انیمه",
      icon: <HiOutlineEmojiHappy size={24} />,
      url: "/anime",
    },
    {
      title: "دسته بندی",
      icon: <BsArchive size={24} />,
      subcategory: [
        { title: "فیلم", resultVideos: 72013, url: "/videos" },
        { title: "سریال", resultVideos: 14278, url: "/series" },
        { title: "مینی سریال", resultVideos: 1057, url: "/mini-series" },
        { title: "مستند", resultVideos: 72013, url: "/ducumentary" },
        { title: "کنسرت", resultVideos: 72013, url: "/concert" },
        { title: "پیشنهادی", resultVideos: 433, url: "/suggest" },
      ],
    },
    {
      title: "تماس با ما",
      icon: <IoIosInformationCircleOutline size={24} />,
      url: "/support",
    },
  ];

  const showCategory = (index) => {
    setSelectCategory((prev) => (index === prev ? -1 : index));
  };

  return (
    <div
      className={`w-11/12 sm:w-8/12 h-screen flex flex-col bg-stone-900 fixed top-0 lg:hidden  md:flex ${
        showMobileMenu ? "right-0" : "-right-[70rem]"
      }  z-50 p-4 overflow-y-auto transition-all duration-300`}
    >
      {/* logo and close button */}
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img src="/assets/logo/logo.png" alt="30nama.com" className="w-32" />
        </Link>
        <IoMdClose
          size={32}
          color="white"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </div>
      <div className="w-full h-auto flex flex-col justify-center items-center mt-20">
        {mainCategory.map((item, index) => (
          <div
            className="w-full flex flex-col justify-center items-center"
            key={index}
          >
            {item.subcategory ? (
              <div
                className="w-full h-full bg-stone-900 flex justify-between items-center py-4 text-white rounded-md cursor-pointer"
                onClick={() => showCategory(index)}
              >
                <div className="w-full h-auto flex justify-start items-center">
                  {item.icon}
                  <span className="w-5/6 font-medium text-xl mr-4">
                    {item.title}
                  </span>
                </div>
                {/* arrow icon */}
                {item?.subcategory ? (
                  <RiArrowDownSLine
                    className={`text-4xl ${
                      selectCategory === index ? "rotate-180" : "rotate-0"
                    } transition-all duration-200`}
                  />
                ) : null}
              </div>
            ) : (
              <Link
                to={item.url}
                className="w-full h-full bg-stone-900 flex justify-between items-center py-4 text-white rounded-md cursor-pointer"
              >
                <div className="w-full h-auto flex justify-start items-center">
                  <span className="w-fit font-medium text-xl">{item.icon}</span>
                  <span className="w-full font-medium text-xl mr-4">
                    {item.title}
                  </span>
                </div>
              </Link>
            )}
            {selectCategory === index ? (
              <div className="w-full h-auto bg-stone-900 flex flex-col justify-between items-center p-4 text-white rounded-b-md">
                {item?.subcategory?.map((category) => (
                  <Link to={category.url} className="w-full h-12">
                    <div className="w-full h-full flex justify-start items-center">
                      <IoRemoveOutline size={24} className="font-bold ml-2" />
                      {category.title}
                      <span className="text-sm text-gray-600 mr-2">
                        ({category.resultVideos})
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {showMobileMenu && (
        <Background
          setShowBackground={setShowMobileMenu}
          showBackground={showMobileMenu}
        />
      )}
    </div>
  );
}
