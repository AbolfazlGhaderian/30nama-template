import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { BiStar } from "react-icons/bi";
import { RiFireLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { GrInfo } from "react-icons/gr";
import movieData from "../movieData";

export default function Home() {
  const [currentImg, setCurrentImg] = useState("the-fault-in-our-stars.jpg");
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [showSuggestDetailMovie, setShowSuggestDetailMovie] = useState(false);
  const [showBestDetailMovie, setShowBestDetailMovie] = useState(false);
  const headerSlider = [
    { id: 1, url: "the-fault-in-our-stars.jpg" },
    { id: 2, url: "game-of-thrones.jpg" },
    { id: 3, url: "braking-bad.jpg" },
  ];

  const faqArr = [
    {
      id: 1,
      question: "آیا برای استفاده از سرویس شما باید اشتراک بخرم؟",
      answer:
        "دانلود و تماشای فیلم و سریال توی 30 نما فقط با خرید اشتراک امکان پذیره ولی با اشتراکی که خریداری میکنید میتونید به تمام سرویس ما بدون محدودیت دسترسی داشته باشید.",
    },
    {
      id: 2,
      question: "آیا میتونم عناوین توی 30 نما رو دانلود کنم؟",
      answer:
        "ما توی 30 نما دو نوع اشتراک داریم، طلایی که هم باهاش میتونید دانلود کنید و هم تماشای آنلاین و اشتراک قرمز که فقط دسترسی به تماشای آنلاین عناوین داره.",
    },
    {
      id: 3,
      question: "آیا امکان تماشای آنلاین هم دارید که نیازی به دانلود نباشه؟",
      answer:
        "معلومه! تمامی اشتراک های ما امکان تماشای آنلاین فیلم ها و سریال های روز دنیا رو بدون دردسر دانلود و زیرنویس پیدا کردن در اختیار شما قرار میده.",
    },
    {
      id: 4,
      question: "آیا 30 نما هم مثل سایت های دیگه سانسور میکنه؟",
      answer:
        "30 نما هیچ وقت تا به حال هیچ عنوانی رو سانسور نکرده و نخواهد کرد و همه ی عناوین رو همونجوری که منتشر شدن در اختیار شما قرار میده.",
    },
    {
      id: 5,
      question: "آیا از 30 نما خارج از ایران هم میشه استفاده کرد؟",
      answer:
        "بله، بخش قابل توجهی از کاربران 30 نما در حال حاضر ایرانیان خارج از کشور (از جمله اروپا و امریکا) هستند و هیچ مشکلی برای استفاده از 30 نما خارج از ایران وجود نداره.",
    },
  ];

  const showAnswer = (index) => {
    setSelectedFAQ((prev) => (index === prev ? -1 : index));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const logCurrentImg = headerSlider.findIndex((item) => {
        return item.url === currentImg;
      });

      const logImage = headerSlider.length;
      const nextImg = logCurrentImg + 1;

      if (nextImg === logImage) {
        setCurrentImg(headerSlider[0].url);
      } else {
        setCurrentImg(headerSlider[nextImg].url);
      }
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [currentImg]);

  return (
    <div className="w-full h-full ">
      {/* header slider */}
      <div className="w-full lg:min-h-[45rem] md:min-h-[70rem] min-h-[80rem] flex justify-center items-center relative bg-stone-900/50 shadow-[inset_rgb(28,25,23)_0px_-14rem_14rem_-50px]">
        <img
          className={`w-full h-full select-none bg-no-repeat bg-cover object-cover absolute -z-10 transition-all duration-1000 scale-100 `}
          src={`/assets/image-header-movie/${currentImg}`}
          alt={`${currentImg}`}
        />
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <h4 className="w-full h-auto text-center sm:text-5xl text-4xl text-white">
            400 هزار فیلم و قسمت سریال
          </h4>
          <div className="w-full grid lg:grid-cols-3 grid-cols-2 justify-items-center items-center mt-20">
            <span className="w-fit lg:col-span-1 sm:col-span-1 col-span-full flex justify-center items-center text-2xl text-white px-4 py-2 bg-stone-900/50 backdrop-blur-sm rounded-md lg:mt-0 sm:mt-20 mt-10">
              <BiStar className="ml-2" /> پشتیبانی ۲۴ ساعته
            </span>
            <span className="w-fit lg:col-span-1 sm:col-span-1 col-span-full flex justify-center items-center text-2xl text-white px-4 py-2 bg-stone-900/50 backdrop-blur-sm rounded-md lg:mt-0 sm:mt-20 mt-10">
              <BiStar className="ml-2" /> بدون سانسور و حذفیات
            </span>
            <span className="w-fit lg:col-span-1 col-span-full flex justify-center items-center text-2xl text-white px-4 py-2 bg-stone-900/50 backdrop-blur-sm rounded-md lg:mt-0 sm:mt-20 mt-10">
              <BiStar className="ml-2" /> اپلیکیشن اختصاصی
            </span>
          </div>
          <Link
            to={"/pricing"}
            className="w-[18rem] h-16 mt-20 relative flex justify-center items-center text-center text-2xl font-medium text-white rounded-md bg-gradient-to-tr from-red-500 to-pink-400"
          >
            <h4 className="w-[17.5rem] h-14 absolute flex justify-center items-center rounded-md bg-stone-900 hover:bg-gradient-to-tr from-red-500 to-pink-400 transition-all duration-200">
              خرید اشتراک و تماشا
            </h4>
          </Link>
        </div>
      </div>
      {/* suggets slider */}
      <div className="w-full h-full relative pt-80">
        <div className="w-full h-full absolute -top-40">
          <div className="w-full h-auto flex justify-between items-center px-4 mb-14">
            <span className="w-fit h-auto flex justify-start items-center text-white text-2xl">
              <BiStar className="ml-2" /> پیشنهادی‌ها
            </span>
            <Link
              to={"/featured"}
              className="w-28 h-10 flex justify-center items-center px-4 py-1 font-semibold bg-transparent text-white border-2 border-blue-600 rounded-md text-base hover:bg-blue-600 transition-all duration-200"
            >
              آرشیو کلی
            </Link>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full h-96 px-8"
          >
            {movieData.map((item, index) => (
              <SwiperSlide
                className="!w-auto !flex !justify-center items-center rounded-md"
                key={index}
              >
                <Link
                  to={`/${item.category}/${item.url}`}
                  className="w-fit h-full select-none flex flex-col justify-center items-center"
                  onMouseEnter={() => setShowSuggestDetailMovie(index)}
                  onMouseLeave={() => setShowSuggestDetailMovie("")}
                >
                  <span className="w-48 bg-stone-800 text-white text-base p-2 block text-center rounded-t-md">
                    {item.title}
                  </span>
                  {/* about movie */}
                  <div
                    className={`w-full h-[21rem] text-white absolute bottom-0 p-4 bg-stone-900/80 backdrop-blur-sm rounded-md text-justify ${
                      showSuggestDetailMovie === index ? "block" : "hidden"
                    } `}
                  >
                    {item.detail.length > 150
                      ? item.detail.slice(0, 150) + "..."
                      : item.detail}
                  </div>
                  {/* image movie */}
                  <img
                    src={`/assets/image-header-movie/${item.imgUrl}`}
                    alt={item.imgUrl}
                    className="!w-56 !h-80 rounded-md object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* best movies slider */}
      <div className="w-full h-full mt-10">
        <div className="w-full h-full relative">
          <div className="w-full h-auto flex justify-between items-center px-4 mb-10">
            <span className="w-fit h-auto flex justify-start items-center text-white text-2xl">
              <RiFireLine className="ml-2" /> 10 عنوان برتر
            </span>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full h-96 px-8"
          >
            {movieData.map((item, index) => (
              <SwiperSlide
                className="!w-auto !flex !justify-center items-center rounded-md"
                key={index}
              >
                <Link
                  to={`/${item.category}/${item.url}`}
                  className="w-fit h-full select-none flex flex-col justify-center items-center"
                  onMouseEnter={() => setShowBestDetailMovie(index)}
                  onMouseLeave={() => setShowBestDetailMovie("")}
                >
                  <span className="w-48 bg-stone-800 text-white text-base p-2 block text-center rounded-t-md">
                    {item.title}
                  </span>
                  {/* about movie */}
                  <div
                    className={`w-full h-[21rem] text-white absolute bottom-0 p-4 bg-stone-900/80 backdrop-blur-sm rounded-md text-justify ${
                      showBestDetailMovie === index ? "block" : "hidden"
                    } `}
                  >
                    {item.detail.length > 150
                      ? item.detail.slice(0, 150) + "..."
                      : item.detail}
                  </div>
                  {/* image movie */}
                  <img
                    src={`/assets/image-header-movie/${item.imgUrl}`}
                    alt={item.imgUrl}
                    className="!w-56 !h-80 rounded-md object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* FAQ */}
      <div className="w-full h-auto flex flex-col justify-center items-center px-4 mt-20">
        <div className="w-full h-auto flex justify-between items-center px-4 mb-14">
          <span className="w-fit h-auto flex justify-start items-center text-white text-2xl">
            <GrInfo className="ml-2" /> سوالات متداول
          </span>
        </div>
        {faqArr.map((item, index) => (
          <div
            className="w-full flex flex-col justify-center items-center"
            key={index}
          >
            <div
              className="w-full h-16 bg-stone-800 flex mt-6 justify-between items-center p-4 text-white rounded-md cursor-pointer"
              onClick={() => showAnswer(index)}
            >
              <span className="w-5/6 font-medium">{item.question}</span>

              <RiArrowDownSLine
                className={`text-4xl ${
                  selectedFAQ === index ? "rotate-180" : "rotate-0"
                } transition-all duration-200`}
              />
            </div>
            {selectedFAQ === index ? (
              <div className="w-11/12 h-auto bg-stone-800 flex justify-between items-center p-4 text-white rounded-b-md">
                <span className="w-full text-wrap font-medium text-center">
                  {item.answer}
                </span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {/* About night movies */}
      <div className="w-full h-[27.5rem] flex flex-col justify-center items-center ">
        <Link to={"/"}>
          <img src="assets/logo/logo.png" alt="30 نما" />
        </Link>
        <div className="w-3/4 flex xl:flex-row flex-col justify-around items-center mt-10">
          <span className="w-fit text-white flex justify-center items-center md:text-lg text-sm px-3 py-2 my-4 rounded-md bg-slate-600/15">
            <RiFireLine className="ml-2" /> دانلود فیلم با لینک مستقیم
          </span>
          <span className="w-fit text-white flex justify-center items-center md:text-lg text-sm px-3 py-2 my-4 rounded-md bg-slate-600/15">
            <RiFireLine className="ml-2" /> دسترسی به بزرگترین آرشیو فیلم و
            سریال
          </span>
          <span className="w-fit text-white flex justify-center items-center md:text-lg text-sm px-3 py-2 my-4 rounded-md bg-slate-600/15">
            <RiFireLine className="ml-2" /> تماشای آنلاین هر جا که هستی
          </span>
        </div>
      </div>
    </div>
  );
}
