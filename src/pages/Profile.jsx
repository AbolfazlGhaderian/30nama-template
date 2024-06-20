import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { SlSocialTwitter } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import { CiLock, CiUnlock } from "react-icons/ci";
import { ErrorAlert, SuccessAlert } from "../components/Alert/Alert";
import AcceptProfileAlert from "../components/AcceptProfileAlert/AcceptProfileAlert";
import { Link } from "react-router-dom";

export default function Profile() {
  const currentEmail = localStorage.getItem("email");
  const currentUsername = localStorage.getItem("username");
  const currentData = JSON.parse(localStorage.getItem("userData"));
  const [profileImg, setProfileImg] = useState(
    "assets/profile-img/profile.jpg"
  );
  const [emailValue, setEmailValue] = useState(
    currentEmail !== null ? currentEmail : ""
  );
  const [telegramValue, setTelegramValue] = useState(
    currentData?.telegram !== undefined ? currentData?.telegram : ""
  );
  const [instagramValue, setInstagramValue] = useState(
    currentData?.instagram !== undefined ? currentData?.instagram : ""
  );
  const [twitterValue, setTwitterValue] = useState(
    currentData?.twitter !== undefined ? currentData?.twitter : ""
  );
  const [firstname, setFirstname] = useState(
    currentData?.firstname !== undefined ? currentData?.firstname : ""
  );
  const [lastname, setLastname] = useState(
    currentData?.lastname !== undefined ? currentData?.lastname : ""
  );
  const [aboutme, setAboutme] = useState(
    currentData?.aboutme !== undefined ? currentData?.aboutme : ""
  );
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showAccesptAlert, setShowAccesptAlert] = useState(false);
  const [showSuccessChangeAlert, setShowSuccessChangeAlert] = useState(false);
  const [showErrorEmailAlert, setShowErrorEmailAlert] = useState(false);
  const userData = [];
  const [currentInput, setCurrentInput] = useState("");

  const changeProfile = (e) => {
    let fileUploaded = e.target.files[0];
    if (fileUploaded !== undefined) {
      setProfileImg(URL.createObjectURL(fileUploaded));
    }
    setShowAccesptAlert(true);
  };

  const focusInput = (e) => {
    setCurrentInput(e.target.id);
  };

  const blurInput = () => {
    setCurrentInput("");
  };

  const changePassword = (e) => {
    const currentLocalPassword = localStorage.getItem("password");
    if (currentLocalPassword === currentPassword && newPassword !== "") {
      localStorage.setItem("password", newPassword);
      setShowSuccessAlert(!showSuccessAlert);
      setCurrentPassword("");
      setNewPassword("");
    } else {
      setShowErrorAlert(!showErrorAlert);
      setCurrentPassword("");
      setNewPassword("");
    }
  };

  const saveChanges = () => {
    const newData = {
      instagram: instagramValue,
      telegram: telegramValue,
      instagram: instagramValue,
      twitter: twitterValue,
      firstname: firstname,
      lastname: lastname,
      aboutme: aboutme,
    };

    userData.push(newData);

    localStorage.setItem("userData", JSON.stringify(newData));

    setEmailValue(emailValue);
    setTelegramValue(telegramValue);
    setInstagramValue(instagramValue);
    setTwitterValue(twitterValue);
    setFirstname(firstname);
    setLastname(lastname);
    setAboutme(aboutme);
    setShowAccesptAlert(false);
    if (emailValue === "") {
      setShowErrorEmailAlert(true);
      setEmailValue(currentEmail);
    } else {
      setShowSuccessChangeAlert(!showSuccessChangeAlert);
    }
  };

  const removeChanges = () => {
    setEmailValue(currentEmail !== null ? currentEmail : "");
    setTelegramValue(
      currentData?.telegram !== undefined ? currentData?.telegram : ""
    );
    setInstagramValue(
      currentData?.instagram !== undefined ? currentData?.instagram : ""
    );
    setTwitterValue(
      currentData?.twitter !== undefined ? currentData?.twitter : ""
    );
    setFirstname(
      currentData?.firstname !== undefined ? currentData?.firstname : ""
    );
    setLastname(
      currentData?.lastname !== undefined ? currentData?.lastname : ""
    );
    setAboutme(currentData?.aboutme !== undefined ? currentData?.aboutme : "");
    setShowAccesptAlert(false);
  };

  const exitUser = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("email");
    localStorage.removeItem("userData");
  };

  return (
    <div className="w-full h-full">
      {/* background gradient and profile */}
      <div className="w-full h-[22rem] bg-gradient-to-bl from-blue-400 to-pink-800 border-b-8 border-white relative">
        {/* image profile */}
        <div className="w-40 h-40 absolute top-[16.5rem] right-12 border-4 border-white rounded-full">
          <input
            type="file"
            className="w-40 h-40 absolute rounded-full top-0 left-0 opacity-0 cursor-pointer"
            title="انتخاب پروفایل"
            onChange={(e) => changeProfile(e)}
          />
          <img
            src={profileImg}
            alt="profile"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
      {/* password / detail / account */}
      <div className="w-full h-full px-4 lg:px-10 md:px-20 mt-32 grid lg:grid-cols-3 grid-cols-1 justify-center items-start">
        {/* detail user */}
        <div className="w-full mt-4 lg:mt-0 grid gap-5 grid-cols-1 flex-col justify-center items-center">
          {/* user account */}
          <div className="w-full lg:w-11/12 h-24 bg-neutral-800 rounded-md flex flex-col justify-between p-4">
            <span className="text-white text-xl">حساب کاربری</span>
            <span className="text-slate-300">رایگان</span>
          </div>
          {/* account */}
          <div className="w-full lg:w-11/12 h-full bg-neutral-800 rounded-md flex flex-col justify-between p-4">
            <span className="text-white text-xl">حساب کاربری</span>
            <form action="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="w-full flex flex-col justify-center items-center">
                {/* email */}
                <label className="w-full relative mt-8 flex justify-start items-center">
                  <span
                    id="email"
                    className={`w-fit mr-4 text-base absolute ${
                      currentInput === "email" || emailValue !== ""
                        ? "-top-3"
                        : "top-3"
                    } right-8 px-2 text-center text-gray-500 bg-neutral-800 transition-all duration-300`}
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
                      setShowAccesptAlert(true);
                    }}
                    className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-neutral-800 rounded-md text-white text-end"
                  />
                </label>
                {/* telegram */}
                <label className="w-full relative mt-8 flex justify-start items-center">
                  <span
                    id="telegram"
                    className={`w-fit mr-4 text-base absolute ${
                      currentInput === "telegram" || telegramValue !== ""
                        ? "-top-3"
                        : "top-3"
                    } right-8 px-2 text-center text-gray-500 bg-neutral-800 transition-all duration-300`}
                  >
                    تلگرام
                  </span>
                  <PiTelegramLogo className="absolute text-gray-500 text-2xl right-2" />
                  <input
                    type="text"
                    onFocus={(e) => focusInput(e)}
                    onBlur={(e) => blurInput(e)}
                    id="telegram"
                    autoComplete="off"
                    value={telegramValue}
                    onChange={(e) => {
                      setTelegramValue(e.target.value);
                      setShowAccesptAlert(true);
                    }}
                    className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-neutral-800 rounded-md text-white text-end"
                  />
                </label>
                {/* instagram */}
                <label className="w-full relative mt-8 flex justify-start items-center">
                  <span
                    id="instagram"
                    className={`w-fit mr-4 text-base absolute ${
                      currentInput === "instagram" || instagramValue !== ""
                        ? "-top-3"
                        : "top-3"
                    } right-8 px-2 text-end text-gray-500 bg-neutral-800 transition-all duration-300`}
                  >
                    اینستاگرام
                  </span>
                  <FaInstagram className="absolute text-gray-500 text-2xl right-2" />
                  <input
                    type="text"
                    onFocus={(e) => focusInput(e)}
                    onBlur={(e) => blurInput(e)}
                    id="instagram"
                    autoComplete="off"
                    value={instagramValue}
                    onChange={(e) => {
                      setInstagramValue(e.target.value);
                      setShowAccesptAlert(true);
                    }}
                    className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-neutral-800 rounded-md text-white text-end"
                  />
                </label>
                {/* twitter */}
                <label className="w-full relative mt-8 flex justify-start items-center">
                  <span
                    id="twitter"
                    className={`w-fit mr-4 text-base absolute ${
                      currentInput === "twitter" || twitterValue !== ""
                        ? "-top-3"
                        : "top-3"
                    } right-8 px-2 text-center text-gray-500 bg-neutral-800 transition-all duration-300`}
                  >
                    توییتر
                  </span>
                  <SlSocialTwitter className="absolute text-gray-500 text-2xl right-2" />
                  <input
                    type="text"
                    onFocus={(e) => focusInput(e)}
                    onBlur={(e) => blurInput(e)}
                    id="twitter"
                    autoComplete="off"
                    value={twitterValue}
                    onChange={(e) => {
                      setTwitterValue(e.target.value);
                      setShowAccesptAlert(true);
                    }}
                    className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-neutral-800 rounded-md text-white text-end"
                  />
                </label>
              </div>
            </form>
          </div>
        </div>
        {/* detail user */}
        <div className="w-full mt-4 lg:mt-0 grid gap-5 grid-cols-1 flex-col justify-center items-center">
          <div className="w-full lg:w-11/12 h-full bg-neutral-800 rounded-md flex flex-col justify-between p-4">
            {/* username */}
            <div className="w-full h-20 flex flex-col">
              <span className="text-white text-xl">مشخصات</span>
              {/* username */}
              <div className="w-full h-full mt-5">
                <span className="text-neutral-500">نام کاربری: </span>
                <span className="text-white">{currentUsername}</span>
              </div>
            </div>
            <form action="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="w-full flex flex-col justify-center items-center">
                {/* firstname */}
                <label className="w-full relative mt-8 flex justify-start items-center">
                  <span
                    id="firstname"
                    className={`w-fit mr-4 text-base absolute ${
                      currentInput === "firstname" || firstname !== ""
                        ? "-top-3"
                        : "top-3"
                    } right-8 px-2 text-center text-gray-500 bg-neutral-800 transition-all duration-300`}
                  >
                    نام
                  </span>
                  <GoPerson className="absolute text-gray-500 text-2xl right-2" />
                  <input
                    type="text"
                    onFocus={(e) => focusInput(e)}
                    onBlur={(e) => blurInput(e)}
                    id="firstname"
                    autoComplete="off"
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                      setShowAccesptAlert(true);
                    }}
                    className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-neutral-800 rounded-md text-white text-end"
                  />
                </label>
                {/* lastname */}
                <label className="w-full relative mt-8 flex justify-start items-center">
                  <span
                    id="lastname"
                    className={`w-fit mr-4 text-base absolute ${
                      currentInput === "lastname" || lastname !== ""
                        ? "-top-3"
                        : "top-3"
                    } right-8 px-2 text-center text-gray-500 bg-neutral-800 transition-all duration-300`}
                  >
                    نام خانوادگی
                  </span>
                  <GoPerson className="absolute text-gray-500 text-2xl right-2" />
                  <input
                    type="text"
                    onFocus={(e) => focusInput(e)}
                    onBlur={(e) => blurInput(e)}
                    id="lastname"
                    autoComplete="off"
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                      setShowAccesptAlert(true);
                    }}
                    className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-neutral-800 rounded-md text-white text-end"
                  />
                </label>
                {/* about me */}
                <textarea
                  type="text"
                  value={aboutme}
                  onChange={(e) => {
                    setAboutme(e.target.value);
                    setShowAccesptAlert(true);
                  }}
                  placeholder="درباره من"
                  className="w-full mt-8 h-40 py-2 px-4 outline-none border-2 border-gray-500 bg-neutral-800 rounded-md text-white text-start"
                />
              </div>
            </form>
          </div>
        </div>
        {/* password */}
        <div className="w-full mt-4 lg:mt-0 grid gap-5 grid-cols-1 flex-col justify-center items-center">
          <div className="w-full lg:w-11/12 h-fit bg-neutral-800 rounded-md flex flex-col justify-start p-4">
            {/* secur title */}
            <div className="w-full h-fit flex flex-col">
              <span className="text-white text-xl">امنیت</span>
            </div>
            <form action="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="w-full flex flex-col justify-center items-center">
                {/* current password */}
                <label className="w-full relative mt-8 flex justify-start items-center">
                  <span
                    id="currentPassword"
                    className={`w-fit mr-4 text-base absolute ${
                      currentInput === "currentPassword" ||
                      currentPassword !== ""
                        ? "-top-3"
                        : "top-3"
                    } right-8 px-2 text-center text-gray-500 bg-neutral-800 transition-all duration-300`}
                  >
                    رمز عبور کنونی
                  </span>
                  {!showCurrentPassword ? (
                    <CiLock
                      className="absolute text-gray-500 text-2xl right-2"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    />
                  ) : (
                    <CiUnlock
                      className="absolute text-gray-500 text-2xl right-2"
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }
                    />
                  )}
                  <input
                    type={!showCurrentPassword ? "password" : "text"}
                    onFocus={(e) => focusInput(e)}
                    onBlur={(e) => blurInput(e)}
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-neutral-800 rounded-md text-white text-end"
                  />
                </label>
                {/* newPassword */}
                <label className="w-full relative mt-8 flex justify-start items-center">
                  <span
                    id="newPassword"
                    className={`w-fit mr-4 text-base absolute ${
                      currentInput === "newPassword" || newPassword !== ""
                        ? "-top-3"
                        : "top-3"
                    } right-8 px-2 text-center text-gray-500 bg-neutral-800 transition-all duration-300`}
                  >
                    رمز عبور جدید
                  </span>
                  {!showNewPassword ? (
                    <CiLock
                      className="absolute text-gray-500 text-2xl right-2"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    />
                  ) : (
                    <CiUnlock
                      className="absolute text-gray-500 text-2xl right-2"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    />
                  )}
                  <input
                    type={!showNewPassword ? "password" : "text"}
                    onFocus={(e) => focusInput(e)}
                    onBlur={(e) => blurInput(e)}
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full pl-4 pr-10 h-12 outline-none border-2 border-gray-500 bg-neutral-800 rounded-md text-white text-end"
                  />
                </label>
                {currentPassword === "" || newPassword === "" ? (
                  <button
                    className="w-full h-10 bg-blue-400 text-white mt-4 rounded-md cursor-pointer"
                    disabled
                  >
                    تغییر رمز عبور
                  </button>
                ) : (
                  <button
                    className="w-full h-10 bg-blue-500 text-white mt-4 rounded-md cursor-pointer hover:bg-blue-600 transition-all duration-200"
                    onClick={(e) => changePassword(e)}
                  >
                    تغییر رمز عبور
                  </button>
                )}
              </div>
            </form>
          </div>
          <Link
            to={"/"}
            className="lg:w-11/12 w-full h-10 mt-20 bg-red-700 text-white rounded-md flex justify-center items-center"
            onClick={exitUser}
          >
            خروج از حساب کاربری
          </Link>
        </div>
      </div>

      <SuccessAlert
        title={"رمز شما با موفقیت تغییر داده شد"}
        showAlert={showSuccessAlert}
        setShowAlert={setShowSuccessAlert}
      />
      <SuccessAlert
        title={"تغییرات شما با موفقیت انجام شد"}
        showAlert={showSuccessChangeAlert}
        setShowAlert={setShowSuccessChangeAlert}
      />
      <ErrorAlert
        title={"رمز کنونی اشتباه است"}
        showAlert={showErrorAlert}
        setShowAlert={setShowErrorAlert}
      />
      <ErrorAlert
        title={"ایمیل شما نمی‌تواند خالی باشد"}
        showAlert={showErrorEmailAlert}
        setShowAlert={setShowErrorEmailAlert}
      />
      <AcceptProfileAlert
        showAccesptAlert={showAccesptAlert}
        saveChanges={saveChanges}
        removeChanges={removeChanges}
      />
    </div>
  );
}
