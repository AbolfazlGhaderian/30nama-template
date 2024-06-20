import React, { useState } from "react";
import { Link } from "react-router-dom";
import Category from "../../Category/Category";

export default function RightSide() {
  const [showCategory, setShowCategory] = useState(false);
  const headerList = [
    { title: "فیلم", url: "/movies" },
    { title: "سریال", url: "/series" },
    { title: "اخبار", url: "/news" },
    { title: "دسته بندی ها", isCategory: true },
    { title: "تماس با ما", url: "/about-us" },
  ];

  return (
    <div className="w-full xl:h-20 lg:h-16 h-20 flex justify-start items-center lg:pr-16 pr-6">
      <Link to={"/"}>
        <img
          src="/assets/logo/logo.png"
          alt="logo"
          className="lg:w-40 w-28 h-10"
        />
      </Link>
      <ul className="w-96 mr-4 h-full lg:flex hidden justify-around items-center text-white">
        {headerList.map((item, index) => (
          <Link to={item.url} key={index} className="h-full flex">
            <li
              className={`content-line h-full text-base font-medium flex justify-center items-center `}
              onMouseEnter={() =>
                setShowCategory(item.isCategory === true ? true : false)
              }
              onMouseLeave={() => setShowCategory(false)}
            >
              {item.title}
            </li>
          </Link>
        ))}
        {showCategory && <Category setShowCategory={setShowCategory} />}
      </ul>
    </div>
  );
}
