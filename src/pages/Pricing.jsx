import React, { useEffect, useRef, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { PiGift } from "react-icons/pi";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function Pricing() {
  const goldAccount = [
    {
      accountTitle: "اشتراک طلایی",
      options: [
        {
          title: "دانلود",
          icon: <FaCircleCheck className="text-2xl ml-4 text-green-400" />,
        },
        {
          title: "تماشای آنلاین",
          icon: <FaCircleCheck className="text-2xl ml-4 text-green-400" />,
        },
        {
          title: "بدون سانسور و حذفیات",
          icon: <FaCircleCheck className="text-2xl ml-4 text-green-400" />,
        },
        {
          title: "پشتیبانی ۲۴ ساعته",
          icon: <FaCircleCheck className="text-2xl ml-4 text-green-400" />,
        },
      ],
      times: [
        { time: "30", price: "133,000", giftTime: "10 روز هدیه" },
        { time: "90", price: "399,000", giftTime: "20 روز هدیه" },
        { time: "180", price: "665,000", giftTime: "30 روز هدیه" },
      ],
    },
  ];
  const redAccount = [
    {
      accountTitle: "اشتراک قرمز",
      options: [
        {
          title: "دانلود",
          icon: <IoIosCloseCircle className="text-3xl ml-2 text-red-700" />,
        },
        {
          title: "تماشای آنلاین",
          icon: <FaCircleCheck className="text-2xl ml-4 text-green-400" />,
        },
        {
          title: "بدون سانسور و حذفیات",
          icon: <FaCircleCheck className="text-2xl ml-4 text-green-400" />,
        },
        {
          title: "پشتیبانی ۲۴ ساعته",
          icon: <FaCircleCheck className="text-2xl ml-4 text-green-400" />,
        },
      ],
      times: [
        { time: "30", price: "119,000", giftTime: "5 روز هدیه" },
        { time: "90", price: "357,000", giftTime: "10 روز هدیه" },
        { time: "180", price: "595,000", giftTime: "30 روز هدیه" },
      ],
    },
  ];
  const [currentIndexGold, setcurrentIndexGold] = useState(null);
  const [currentIndexRed, setcurrentIndexRed] = useState(null);
  const buyButtonGold = useRef(null);
  const accountTimeGold = useRef(null);
  const buyButtonRed = useRef(null);
  const accountTimeRed = useRef(null);

  function mouseLeaveHandler() {
    if (buyButtonGold !== null && accountTimeGold !== null) {
      buyButtonGold?.current?.classList?.remove(
        "!pl-2",
        "!text-black",
        "!bg-yellow-400"
      );
      accountTimeGold?.current?.classList?.remove("!text-white");
    }
    if (buyButtonRed !== null && accountTimeRed !== null) {
      buyButtonRed?.current?.classList?.remove(
        "!pl-2",
        "!text-black",
        "!bg-yellow-400"
      );
      accountTimeRed?.current?.classList?.remove("!text-white");
    }
    setcurrentIndexGold(null);
    setcurrentIndexRed(null);
  }

  useEffect(() => {
    if (buyButtonGold !== null && accountTimeGold !== null) {
      buyButtonGold?.current?.classList?.add(
        "!pl-2",
        "!text-black",
        "!bg-yellow-400"
      );
      accountTimeGold?.current?.classList?.add("!text-white");
    }
    if (buyButtonRed !== null && accountTimeRed !== null) {
      buyButtonRed?.current?.classList?.add(
        "!pl-2",
        "!text-black",
        "!bg-yellow-400"
      );
      accountTimeRed?.current?.classList?.add("!text-white");
    }
  }, [currentIndexGold, currentIndexRed]);

  return (
    <div className="w-full h-full lg:px-20 px-0 mt-36">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {/* about pricing */}
        <div className="lg:w-8/12 w-11/12 md:h-48 h-full flex justify-center items-center bg-gradient-to-tr from-red-600 to-pink-700 md:rounded-tl-[8rem] md:rounded-br-[8rem] ">
          <div className="md:w-[98%] w-full md:h-[94%] h-full flex flex-col justify-start items-center py-8 bg-stone-900 md:rounded-tl-[8rem] md:rounded-br-[8rem] ">
            <h4 className="w-10/12 h-full text-center text-white md:text-3xl text-2xl font-bold">
              یک اشتراک بجای تمام اشتراک‌ها
            </h4>
            <span className="w-10/12 h-full text-center text-white text-xl font-medium mt-4">
              خرید اشتراک 30 نما
            </span>
            <span className="w-10/12 h-full text-center text-white lg:text-base text-sm font-normal mt-4">
              یکبار برای همیشه خیال خود را از جستجوی لینک دانلود هر فیلم و
              سریالی در گوگل و سایت‌های دیگر راحت کنید.
            </span>
          </div>
        </div>
        {/* Accounts */}
        <div className="w-full h-full flex xl:flex-row flex-col justify-between items-center mt-16">
          {/* Gold account */}
          {goldAccount.map((account, index) => (
            <div
              key={index}
              className="xl:w-[44%] sm:w-9/12 w-11/12 h-full flex flex-col justify-start p-8 items-center rounded-2xl border-2 border-yellow-400 bg-stone-900"
            >
              {/* Title account */}
              <span className="w-full text-center text-4xl font-bold drop-shadow-[0px_0px_5px_red] drop text-yellow-500">
                {account.accountTitle}
              </span>
              {/* Options */}
              <ul className="w-full h-full mt-10">
                {account.options.map((opton, index) => (
                  <li
                    key={index}
                    className="w-full h-12 bg-stone-800 flex justify-start items-center px-3 rounded-full mb-6"
                  >
                    {opton.icon}
                    <span className="text-white text-xl">{opton.title}</span>
                  </li>
                ))}
              </ul>
              {/* Price */}
              <div className="w-full h-full flex flex-col justify-center items-center">
                {account.times.map((account, index) => (
                  <div
                    key={index}
                    className="w-full h-20 relative flex justify-center mt-6 mb-2 items-center bg-gradient-to-tr from-red-600 to-pink-500 rounded-md"
                  >
                    <Link
                      to={"#"}
                      className="sm:w-[99%] w-[98%] h-[94%] flex justify-between items-center sm:px-5 px-3 bg-stone-900 rounded-md hover:bg-gradient-to-tr hover:from-red-600 hover:to-pink-500 transition-all duration-300"
                      onMouseEnter={() => setcurrentIndexGold(index)}
                      onMouseLeave={mouseLeaveHandler}
                    >
                      <div>
                        {/* Gift */}
                        <span className="w-36 h-8 text-center flex justify-center items-center rounded-full rounded-br-none bg-stone-900 absolute text-white -top-4 border-2 border-yellow-400">
                          <PiGift className="ml-2 text-xl text-yellow-400" />
                          {account.giftTime}
                        </span>
                        {/* Days */}
                        <span
                          ref={
                            currentIndexGold === index ? accountTimeGold : null
                          }
                          className="sm:text-xl text-sm text-stone-500 ml-4 hover:text-white transition-all duration-200"
                        >
                          {account.time} روز
                        </span>
                        {/* Price */}
                        <span className="sm:text-xl text-sm text-white">
                          {account.price} تومن
                        </span>
                      </div>
                      <div
                        className="lg:w-28 sm:w-24 w-20 h-10 flex justify-between items-center bg-red-500 rounded-md md:pl-5 pr-5 pl-3 text-white transition-all duration-300"
                        ref={currentIndexGold === index ? buyButtonGold : null}
                      >
                        <span className="sm:text-xl text-sm font-light">
                          خرید
                        </span>
                        <SlArrowLeft className="sm:text-lg text-sm font-extrabold" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Red account */}
          {redAccount.map((account, index) => (
            <div
              key={index}
              className="xl:w-[44%] sm:w-9/12 w-11/12 xl:mt-0 mt-10 h-full flex flex-col justify-start p-8 items-center rounded-2xl border-2 border-red-700 bg-stone-900"
            >
              {/* Title account */}
              <span className="w-full text-center text-4xl font-bold drop-shadow-[0px_0px_5px_red] drop text-red-500">
                {account.accountTitle}
              </span>
              {/* Options */}
              <ul className="w-full h-full mt-10">
                {account.options.map((opton, index) => (
                  <li
                    key={index}
                    className="w-full h-12 bg-stone-800 flex justify-start items-center px-3 rounded-full mb-6"
                  >
                    {opton.icon}
                    <span className="text-white text-xl">{opton.title}</span>
                  </li>
                ))}
              </ul>
              {/* Price */}
              <div className="w-full h-full flex flex-col justify-center items-center">
                {account.times.map((account, index) => (
                  <div
                    key={index}
                    className="w-full h-20 relative flex justify-center mt-6 mb-2 items-center bg-gradient-to-tr from-red-600 to-pink-500 rounded-md"
                  >
                    <Link
                      to={"#"}
                      className="sm:w-[99%] w-[98%] h-[94%] flex justify-between items-center sm:px-5 px-3 bg-stone-900 rounded-md hover:bg-gradient-to-tr hover:from-red-600 hover:to-pink-500 transition-all duration-300"
                      onMouseEnter={() => setcurrentIndexRed(index)}
                      onMouseLeave={mouseLeaveHandler}
                    >
                      <div>
                        <span className="w-36 h-8 text-center flex justify-center items-center rounded-full rounded-br-none bg-stone-900 absolute text-white -top-4 border-2 border-yellow-400">
                          <PiGift className="ml-2 text-xl text-yellow-400" />
                          {account.giftTime}
                        </span>
                        <span
                          ref={
                            currentIndexRed === index ? accountTimeRed : null
                          }
                          className="sm:text-xl text-sm text-stone-500 ml-4 hover:text-white transition-all duration-200"
                        >
                          {account.time} روز
                        </span>
                        <span className="sm:text-xl text-sm text-white">
                          {account.price} تومن
                        </span>
                      </div>
                      <div
                        className="lg:w-28 sm:w-24 w-20 h-10 flex justify-between items-center bg-red-500 rounded-md md:pl-5 pl-3 pr-5 text-white transition-all duration-300"
                        ref={currentIndexRed === index ? buyButtonRed : null}
                      >
                        <span className="sm:text-xl text-sm font-light">
                          خرید
                        </span>
                        <SlArrowLeft className="sm:text-lg text-sm font-extrabold" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
