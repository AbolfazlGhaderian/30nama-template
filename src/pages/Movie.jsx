import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movieData from "../movieData";
import { FaRegCommentDots } from "react-icons/fa";
import { SuccessAlert } from "../components/Alert/Alert";

export default function Movie() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const [movie, setMovie] = useState([]);
  const [currentPart, setCurrentPart] = useState(0);
  const [commentValue, setCommentValue] = useState("");
  const [relpyValue, setRelpyValue] = useState("");
  const [userLogin, setUserLogin] = useState();
  const [showReply, setShowReply] = useState(false);
  const [replyIndex, setReplyIndex] = useState("");
  const params = useParams();
  const partion = [
    { title: "اطلاعات بیشتر" },
    { title: "دانلود" },
    { title: "زیرنویس" },
    { title: "دیدگاه" },
  ];
  const [loginAlert, setLoginAlert] = useState(false);
  const [sendCommentAlert, setSendCommentAlert] = useState(false);

  const replyComment = (id) => {
    setReplyIndex(id);
    setShowReply(!showReply);
  };

  const sendComment = () => {
    if (username && password) {
      setCommentValue("");
      setSendCommentAlert(true);
    }
  };

  const sendReply = () => {
    if (username && password) {
      setRelpyValue("");
      setSendCommentAlert(true);
    }
  };

  useEffect(() => {
    const selectMovie = movieData.find((item) => {
      if (item.url === params.movie) {
        return item;
      }
    });
    if (selectMovie !== undefined) {
      setMovie(selectMovie);
    }
    const userName = localStorage.getItem("username");
    setUserLogin(userName);
  }, [params, localStorage.getItem("username")]);

  return (
    <div className="w-full h-full">
      {/* header detail movie */}
      <div className={`w-full h-[48rem] flex lg:flex-row flex-col justify-end`}>
        <img
          src={`/assets/image-header-movie/${movie.imgHeader}`}
          alt={movie.title}
          className="w-full xl:w-10/12 lg:w-8/12 h-full scale-100 bg-no-repeat bg-cover object-cover select-none"
          draggable="false"
        />
        {/* detail */}
        <div className="w-full h-[48rem] flex flex-col items-start justify-center xl:pr-16 lg:pr-10 pr-4 pl-10 lg:my-0 my-8 lg:absolute relative top-0 right-0 lg:bg-black/50 bg-stone-900 xl:shadow-[inset_black_-36rem_0px_5rem_-3rem] lg:shadow-[inset_black_-36rem_0px_5rem_-7rem] ">
          <div className="lg:w-96 w-full h-full flex flex-col items-start justify-center ">
            <h1 className="w-full h-auto text-3xl text-white">{movie.title}</h1>
            <span className="block text-2xl text-gray-400 mt-8">
              {movie.persianTitle}
            </span>
            {/* gdnre */}
            <div className="w-full h-auto flex">
              {movie?.gdnre?.map((item, index) => (
                <Link
                  to={`${item.url}`}
                  className="w-fit h-fit ml-4 px-3 py-1 bg-stone-800 text-white rounded-md mt-8"
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            {/* imdb rating */}
            <div className="w-full flex justify-start items-center mt-8">
              <span className="text-white ml-2">{movie.imdbRating}</span>
              <img
                src="/assets/logo/imdb.png"
                alt="imdb"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <span className="w-full block text-white mt-8">{movie.detail}</span>
          </div>
        </div>
      </div>
      {/* partion */}
      <div className="w-full h-20 bg-stone-900 shadow-md">
        <ul className="w-full h-full flex justify-around items-center">
          {partion.map((item, index) => (
            <li
              className={`w-full h-full flex justify-center items-center cursor-pointer text-white md:text-base text-sm font-normal ${
                currentPart === index ? "border-b-4 border-red-700" : ""
              }`}
              key={index}
              onClick={() => setCurrentPart(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {currentPart === 0 ? (
        <>
          {/* more info */}
          <div className="w-full h-full flex flex-col justify-center items-center md:px-16 px-4 lg:mt-0 md:mt-8">
            {/* movie / series trailer */}
            {movie?.trainer && (
              <div className="w-full h-full flex flex-col justify-center items-center">
                <span className="my-8 text-yellow-400">
                  برای مشاهده تریلر از VPN استفاده کنید
                </span>
                <iframe
                  src={movie.trainer}
                  title="YouTube video player"
                  frameborder="0"
                  className="md:w-[35rem] md:h-80 sm:w-[30rem] sm:h-72 max-[640px]:h-80 max-[545px]:h-72 max-[495px]:h-64 max-[430px]:h-56 max-[400px]:h-52 max-[360px]:h-48 w-full mb-8"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {/* about movie */}
            <h1 className="w-full md:h-24 h-full flex justify-center items-center md:text-center text-justify text-white text-2xl">
              {movie.detail}
            </h1>
            {/* name movie */}
            <div className="w-full h-full flex justify-start items-center sm:mt-10 mt-20">
              <span className="xl:w-3/12 lg:w-4/12 md:w-4/12 sm:w-6/12 w-8/12 text-white lg:text-2xl text-lg font-bold">
                {movie.persianTitle}
              </span>
              <span className="w-full h-px bg-gray-500"></span>
            </div>
            {/* detail */}
            <div className="w-full h-full flex md:flex-row flex-col md:justify-start justify-center items-center mt-10">
              <img
                src={`/assets/image-header-movie/${movie.imgUrl}`}
                alt={movie.title}
                className="w-56 h-80 rounded-md bg-no-repeat bg-cover object-cover"
              />
              <div className="w-full lg:h-48 h-full flex justify-center items-center md:mt-0  mt-20">
                <ul className="w-11/12 h-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
                  {movie?.detailMovieList?.map((item, index) => (
                    <li
                      className="w-full h-full flex justify-start items-center pb-8"
                      key={index}
                    >
                      <div className=" text-white text-2xl ml-2">
                        {item.icon}
                      </div>
                      <span className="w-[3px] h-full bg-red-600 rounded-full"></span>
                      <div className="w-full h-full flex flex-col justify-around items-start mr-2">
                        <span className="text-gray-500 text-base">
                          {item.title}
                        </span>
                        <span className="text-white text-base">
                          {item.answer}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : currentPart === 2 ? (
        <>
          {/* download subtitle */}
          <div className="w-full h-full grid lg:grid-cols-2 grid-cols-1 lg:justify-around justify-items-center items-center lg:p-16 p-2">
            {movie?.subtitles?.map((subtitleLink, index) => (
              <Link
                to={subtitleLink.urlSub}
                target="_blank"
                key={index}
                className="w-11/12 h-14 flex flex-row justify-between items-center mt-8 border-r-4 border-blue-600 rounded-md bg-stone-600 px-6"
              >
                <div className="ml-4">
                  <span className="text-red-600">زبان: &nbsp;</span>
                  <span className="text-white text-base font-normal">
                    {subtitleLink.subType}
                  </span>
                </div>
                <div>
                  <span className="text-red-600">کیفیت: &nbsp;</span>
                  <span className="text-white text-base font-normal">
                    تمام کیفیت ها
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : currentPart === 3 ? (
        <>
          {/* Comments */}
          <div className="w-full md:px-20 px-5 flex flex-col justify-center items-center mt-8">
            {/* Title */}
            <div className="w-full flex justify-start items-center">
              <FaRegCommentDots className="text-white text-2xl ml-4" />
              <span className="text-white text-2xl">دیدگاه‌ها</span>
            </div>
            {/* Send Comment */}
            <div className="w-full h-auto flex justify-center items-center mt-20  ">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full min-h-20 relative flex flex-col justify-center items-center"
              >
                {userLogin && (
                  <span className="absolute text-start text-white -top-[2.55rem] xl:right-[23%] md:right-[15%] right-[10%] bg-red-600 px-2 py-2 rounded-t-md">
                    {userLogin}
                  </span>
                )}
                {loginAlert && (
                  <span className="text-red-500 mb-4">
                    برای ارسال دیدگاه وارد
                    <Link
                      to={"/login"}
                      className="hover:text-red-700 underline transition-all duration-200"
                    >
                      {" "}
                      حساب کاربری{" "}
                    </Link>
                    شوید
                  </span>
                )}
                <textarea
                  className="xl:w-3/5 md:w-4/5 w-full min-h-32 text-base rounded-md resize-none outline-none border-none bg-stone-800 text-white px-4 py-5"
                  placeholder="دیدگاه شما"
                  value={commentValue}
                  onChange={(e) => setCommentValue(e.target.value)}
                  onFocus={() => {
                    username === null && password === null
                      ? setLoginAlert(true)
                      : setLoginAlert(false);
                  }}
                ></textarea>
                {commentValue ? (
                  <button
                    className="w-32 h-10 cursor-pointer bg-blue-600 text-white text-lg rounded-b-md transition-all duration-200"
                    onClick={sendComment}
                  >
                    ارسال دیدگاه
                  </button>
                ) : (
                  <button
                    className="w-32 h-10 cursor-pointer bg-blue-500 text-white text-lg rounded-b-md transition-all duration-200"
                    disabled
                  >
                    ارسال دیدگاه
                  </button>
                )}
              </form>
            </div>
            {/* Comments */}
            {movie.comments?.map((comment, index) => (
              <div
                className="w-full h-full flex flex-col justify-center items-center mt-10 relative"
                key={index}
              >
                {/* Username */}
                <span className="absolute text-start text-white top-0 xl:right-[23%] md:right-[15%] right-[10%] bg-red-600 px-2 py-2 rounded-t-md">
                  {comment.author}
                </span>
                {/* Reply */}
                <div className="xl:w-3/5 md:w-4/5 w-full h-auto mt-10 flex flex-col justify-center items-center bg-stone-800 rounded-lg">
                  {/* Date */}
                  <div className="w-full text-end">
                    <span className=" bg-stone-700 px-2 text-lg text-stone-500 rounded-tl-lg rounded-br-lg">
                      {comment.timeComment}
                    </span>
                  </div>
                  {/* Comment content */}
                  <span className="w-full h-full p-4 pb-8 text-white">
                    {comment.contetnt}
                  </span>
                  {/* Answer Reply */}
                  {comment.replies.map((reply, index) => (
                    <div
                      key={index}
                      className="w-11/12 h-auto flex flex-col justify-center items-center bg-stone-600 rounded-lg mb-8"
                    >
                      {/* Date */}
                      <div className="w-full text-end flex justify-between items-top">
                        <span className="text-center text-white bg-red-600 p-2 rounded-tr-md rounded-bl-md">
                          {reply.author}
                        </span>
                        <span className="h-fit bg-stone-700 px-2 text-lg text-stone-500 rounded-tl-lg rounded-br-lg">
                          {reply.timeReply}
                        </span>
                      </div>
                      {/* Comment content */}
                      <span className="w-full h-full p-4 pb-8 text-white">
                        {reply.relpy}
                      </span>
                    </div>
                  ))}
                  {/* Send reply */}
                  <div className="w-full h-auto flex flex-col justify-end items-end">
                    {showReply && comment.id === replyIndex && (
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="w-full h-full relative flex flex-col justify-center items-center mt-12 mb-8"
                      >
                        {/* Username */}
                        {userLogin && (
                          <span className="absolute text-start text-white -top-[2.55rem] xl:right-[8%] md:right-[15%] right-[10%] bg-red-600 px-2 py-2 rounded-t-md">
                            {userLogin}
                          </span>
                        )}
                        {/* login alert */}
                        {loginAlert && (
                          <span className="text-red-500 mb-4">
                            برای ارسال دیدگاه وارد
                            <Link
                              to={"/login"}
                              className="hover:text-red-700 underline transition-all duration-200"
                            >
                              حساب کاربری
                            </Link>
                            شوید
                          </span>
                        )}
                        {/* Content */}
                        <textarea
                          className="w-11/12 min-h-32 text-base rounded-md resize-none outline-none border-none bg-stone-700 text-white px-4 py-5"
                          placeholder="دیدگاه شما"
                          value={relpyValue}
                          onChange={(e) => setRelpyValue(e.target.value)}
                          onFocus={() => {
                            username === null && password === null
                              ? setLoginAlert(true)
                              : setLoginAlert(false);
                          }}
                        ></textarea>
                        {relpyValue ? (
                          <button
                            className={`w-32 h-10 cursor-pointer ${
                              relpyValue ? "bg-blue-600" : "bg-blue-500"
                            } text-white text-lg rounded-b-md transition-all duration-200`}
                            onClick={sendReply}
                          >
                            ارسال دیدگاه
                          </button>
                        ) : (
                          <button
                            className={`w-32 h-10 cursor-pointer ${
                              relpyValue ? "bg-blue-600" : "bg-blue-500"
                            } text-white text-lg rounded-b-md transition-all duration-200`}
                            disabled
                          >
                            ارسال دیدگاه
                          </button>
                        )}
                      </form>
                    )}
                    <button
                      onClick={() => replyComment(comment.id)}
                      className="w-auto h-8 px-5 bg-blue-800 text-lg rounded-bl-lg rounded-tr-lg text-white cursor-pointer"
                    >
                      {showReply && comment.id === replyIndex
                        ? "بستن پاسخ"
                        : "پاسخ"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Download Movie */}
          <div className="w-full h-auto text-white mt-8 flex flex-col justify-center items-center">
            {userLogin ? (
              <span className="text-2xl">هنوز لینک دانلود نذاشتم 😋</span>
            ) : (
              <>
                <span className="w-full text-center text-2xl">
                  برای تماشا و یا دانلود وارد حساب کاربری خود شوید
                </span>
                <Link
                  to={"/login"}
                  className="text-xl mt-4 bg-blue-600 px-4 py-5 rounded-lg hover:bg-blue-700"
                >
                  ورود به حساب کاربری
                </Link>
              </>
            )}
          </div>
        </>
      )}
      <SuccessAlert
        setShowAlert={setSendCommentAlert}
        showAlert={sendCommentAlert}
        title={"دیدگاه شما ثبت شد و درحال بررسی می‌باشد"}
      />
    </div>
  );
}
