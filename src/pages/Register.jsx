import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiLock, CiUnlock } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hintBigCharackter, setHintBigCharackter] = useState(false);
  const [hintNumber, setHintNumber] = useState(false);
  const [hintSpesialCharackter, setHintSpesialCharackter] = useState(false);
  const [hintMinMaxPassword, setHintMinMaxPassword] = useState(false);

  const focusInput = (e) => {
    setCurrentInput(e.target.id);
  };

  const blurInput = () => {
    setCurrentInput("");
  };

  const register = () => {
    if (
      emailValue !== "" &&
      userNameValue !== "" &&
      passwordValue !== "" &&
      hintBigCharackter &&
      hintNumber &&
      hintSpesialCharackter &&
      hintMinMaxPassword
    ) {
      localStorage.setItem("email", emailValue);
      localStorage.setItem("username", userNameValue);
      localStorage.setItem("password", passwordValue);
      setEmailValue("");
      setUserNameValue("");
      setPasswordValue("");
    }
  };

  const passwordValidate = (e) => {
    const inputValue = e.target.value;
    const bigCharackter = new RegExp("[A-Z]");
    const number = new RegExp("[0-9]");
    const spesialCharackter = new RegExp("[@#$%^&*!()_-]");

    setHintBigCharackter(bigCharackter.test(inputValue) ? true : false);
    setHintNumber(number.test(inputValue) ? true : false);
    setHintSpesialCharackter(spesialCharackter.test(inputValue) ? true : false);
    setHintMinMaxPassword(
      inputValue.length > 8 && inputValue.length <= 16 ? true : false
    );

    setPasswordValue(inputValue);
  };

  return (
    <div className="w-full h-full flex justify-center items-center mt-40 px-4 ">
      <div className="w-[35rem] h-full p-2 flex justify-center items-center bg-gradient-to-tr from-red-500 to-pink-400 rounded-2xl">
        <div className="w-full h-full flex flex-col justify-start py-10 px-8 bg-stone-900 rounded-2xl">
          <span className="text-white md:text-5xl text-4xl font-medium">
            عضویت
          </span>
          <form onSubmit={(e) => e.preventDefault()} className="mt-10">
            {/* Email */}
            <label className="w-full relative mt-8 flex justify-start items-center">
              <span
                className={`w-fit mr-4 text-base absolute ${
                  currentInput === "email" || emailValue !== ""
                    ? "-top-3"
                    : "top-3"
                } right-8 px-2 text-center text-gray-500 bg-stone-900 transition-all duration-300`}
              >
                ایمیل
              </span>
              <AiOutlineMail className="absolute text-gray-500 text-2xl right-2" />
              <input
                type="email"
                onFocus={(e) => focusInput(e)}
                onBlur={(e) => blurInput(e)}
                id="email"
                autoComplete="off"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
                className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-stone-900 rounded-md text-white text-end"
              />
            </label>
            {/* Username */}
            <label className="w-full relative mt-4 flex justify-start items-center">
              <span
                className={`w-fit mr-4 text-base absolute ${
                  currentInput === "username" || userNameValue !== ""
                    ? "-top-3"
                    : "top-3"
                } right-8 px-2 text-center text-gray-500 bg-stone-900 transition-all duration-300`}
              >
                نام کاربری
              </span>
              <RiUser3Line className="absolute text-gray-500 text-2xl right-2" />
              <input
                type="text"
                onFocus={(e) => focusInput(e)}
                onBlur={(e) => blurInput(e)}
                autoComplete="off"
                id="username"
                value={userNameValue}
                onChange={(e) => {
                  setUserNameValue(e.target.value);
                }}
                className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-stone-900 rounded-md text-white text-end"
              />
            </label>
            {/* Password */}
            <label className="w-full relative mt-4 flex justify-start items-center">
              <span
                className={`w-fit mr-4 text-base absolute ${
                  currentInput === "password" || passwordValue !== ""
                    ? "-top-3"
                    : "top-3"
                } right-8 px-2 text-center text-gray-500 bg-stone-900 transition-all duration-300`}
              >
                رمزعبور
              </span>
              {showPassword ? (
                <CiUnlock
                  className="absolute text-gray-500 text-2xl right-2"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <CiLock
                  className="absolute text-gray-500 text-2xl right-2"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
              <input
                type={showPassword ? "text" : "password"}
                onFocus={(e) => focusInput(e)}
                onBlur={(e) => blurInput(e)}
                id="password"
                autoComplete="off"
                value={passwordValue}
                onChange={(e) => passwordValidate(e)}
                className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-stone-900 rounded-md text-white text-end"
              />
            </label>
            {/* hint for password */}
            <div className="w-full h-full mt-4 flex flex-col">
              <span
                className={` mt-2 ${
                  hintBigCharackter
                    ? "text-stone-500 line-through"
                    : "text-stone-300"
                }`}
              >
                استفاده از حروف بزرگ
              </span>
              <span
                className={` mt-2 ${
                  hintNumber ? "text-stone-500 line-through" : "text-stone-300"
                }`}
              >
                استفاده از اعداد
              </span>
              <span
                className={` mt-2 ${
                  hintSpesialCharackter
                    ? "text-stone-500 line-through"
                    : "text-stone-300"
                }`}
              >
                استفاده از کارتر ها مثلا : @ # $ % ^ & * ! () _ -
              </span>
              <span
                className={` mt-2 ${
                  hintMinMaxPassword
                    ? "text-stone-500 line-through"
                    : "text-stone-300"
                }`}
              >
                رمز باید بین 8 تا 16 کارتر باشد
              </span>
            </div>
            <Link
              to={
                emailValue !== "" &&
                userNameValue !== "" &&
                passwordValue !== "" &&
                hintBigCharackter &&
                hintNumber &&
                hintSpesialCharackter &&
                hintMinMaxPassword &&
                "/"
              }
              className={`w-full h-10 rounded-md mt-10 ${
                emailValue !== "" ? "bg-blue-600" : "bg-blue-400"
              } text-white text-lg flex justify-center items-center transition-all duration-200`}
              onClick={register}
            >
              عضویت
            </Link>
            <Link
              to={"/login"}
              className="w-full h-10 flex justify-center items-center text-white mt-6 hover:text-slate-400 transition-all duration-300"
            >
              ورود
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
