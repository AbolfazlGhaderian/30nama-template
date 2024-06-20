import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Movie from "./pages/Movie";
import movieData from "./movieData";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";

export default function Routs() {
  const location = useLocation();

  const currentEmail = localStorage.getItem("email");
  const currentUsername = localStorage.getItem("username");
  const currentPassword = localStorage.getItem("password");

  useEffect(() => {
    let scroll = Math.floor(window.scrollY);
    let scrollToTop = setInterval(() => {
      scroll -= 100;
      if (scroll <= 0) {
        window.scrollTo(0, 0);
        clearInterval(scrollToTop);
      } else {
        window.scrollTo(0, scroll);
      }
    }, 30);
  }, [location.pathname]);

  return (
    <div>
      {location.pathname === "/profile" &&
      currentEmail === null &&
      currentUsername === null &&
      currentPassword === null ? (
        <Navigate to={"/login"} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricing" element={<Pricing />} />
          {movieData?.map((item, index) => (
            <Route
              key={index}
              path={`/${item.category}/:movie`}
              element={<Movie />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}
