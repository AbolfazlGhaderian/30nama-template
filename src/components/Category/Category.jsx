import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArchive } from "react-icons/bs";
import { PiDotsNineBold, PiTrendUp, PiListBullets } from "react-icons/pi";

export default function Category({ setShowCategory }) {
  const [selectCategory, setSelectCategory] = useState(0);

  const mainCategory = [
    {
      title: "دسته بندی",
      icon: <BsArchive />,
      subcategory1: [
        { title: "فیلم", resultVideos: 72013, url: "/videos" },
        { title: "سریال", resultVideos: 14278, url: "/series" },
        { title: "مینی سریال", resultVideos: 1057, url: "/mini-series" },
        { title: "مستند", resultVideos: 72013, url: "/ducumentary" },
        { title: "کنسرت", resultVideos: 72013, url: "/concert" },
        { title: "پیشنهادی", resultVideos: 433, url: "/suggest" },
      ],
      subcategory2: [
        { title: "فیلم", resultVideos: 72013, url: "/videos" },
        { title: "سریال", resultVideos: 14278, url: "/series" },
        { title: "مینی سریال", resultVideos: 1057, url: "/mini-series" },
        { title: "مستند", resultVideos: 72013, url: "/ducumentary" },
        { title: "کنسرت", resultVideos: 72013, url: "/concert" },
        { title: "پیشنهادی", resultVideos: 433, url: "/suggest" },
      ],
      subcategory3: [
        { title: "فیلم", resultVideos: 72013, url: "/videos" },
        { title: "سریال", resultVideos: 14278, url: "/series" },
        { title: "مینی سریال", resultVideos: 1057, url: "/mini-series" },
        { title: "مستند", resultVideos: 72013, url: "/ducumentary" },
        { title: "کنسرت", resultVideos: 72013, url: "/concert" },
        { title: "پیشنهادی", resultVideos: 433, url: "/suggest" },
      ],
      subcategory4: [
        { title: "فیلم", resultVideos: 72013, url: "/videos" },
        { title: "سریال", resultVideos: 14278, url: "/series" },
        { title: "مینی سریال", resultVideos: 1057, url: "/mini-series" },
        { title: "مستند", resultVideos: 72013, url: "/ducumentary" },
        { title: "کنسرت", resultVideos: 72013, url: "/concert" },
        { title: "پیشنهادی", resultVideos: 433, url: "/suggest" },
      ],
    },
    {
      title: "ژانر ها",
      icon: <PiDotsNineBold />,
    },
    {
      title: "باکس آفیس",
      icon: <PiTrendUp />,
    },
    {
      title: "عناوین برتر",
      icon: <PiListBullets />,
    },
  ];

  return (
    <div
      className="min-w-[50rem] min-h-80 fixed top-20 right-96 xl:right-96 lg:right-10 rounded-b-md bg-stone-900 flex justify-start items-start border border-t-2 border-blue-700 z-50"
      onMouseEnter={() => setShowCategory(true)}
      onMouseLeave={() => setShowCategory(false)}
    >
      <div className="min-w-48 max-h-96 overflow-auto p-4">
        <ul className="min-w-40 h-full">
          {mainCategory.map((item, index) => (
            <li
              className={`min-w-40 h-full text-base p-2 flex justify-start items-center cursor-pointer ${
                selectCategory === index ? "bg-slate-700" : "hover:bg-slate-700"
              }`}
              onMouseEnter={() => setSelectCategory(index)}
              key={index}
            >
              <span>{item.icon}</span>
              <span className="mr-2">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full pr-4 max-h-96 overflow-auto p-4">
        <ul className="max-w-44 h-full">
          {mainCategory[selectCategory]?.subcategory1?.map((item, index) => (
            <Link to={item.url} key={index}>
              <li className="w-full text-base p-2 cursor-pointer ">
                {item.title}
                <span className="text-xs text-gray-600">
                  ({item.resultVideos})
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full pr-4 max-h-96 overflow-auto p-4">
        <ul className="max-w-44 h-full">
          {mainCategory[selectCategory]?.subcategory2?.map((item, index) => (
            <Link to={item.url} key={index}>
              <li className="w-full text-base p-2 cursor-pointer ">
                {item.title}
                <span className="text-xs text-gray-600">
                  ({item.resultVideos})
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full pr-4 max-h-96 overflow-auto p-4">
        <ul className="max-w-44 h-full">
          {mainCategory[selectCategory]?.subcategory3?.map((item, index) => (
            <Link to={item.url} key={index}>
              <li className="w-full text-base p-2 cursor-pointer ">
                {item.title}
                <span className="text-xs text-gray-600">
                  ({item.resultVideos})
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-full pr-4 max-h-96 overflow-auto p-4">
        <ul className="max-w-44 h-full">
          {mainCategory[selectCategory]?.subcategory4?.map((item, index) => (
            <Link to={item.url} key={index}>
              <li className="w-full text-base p-2 cursor-pointer ">
                {item.title}
                <span className="text-xs text-gray-600">
                  ({item.resultVideos})
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
