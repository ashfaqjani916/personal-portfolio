"use client";
import React, { useState, useEffect } from "react";

const ToggleBtn = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  return (
    <div>
      <label className="inline-flex items-center w-full cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
          className="relative w-14 h-7 bg-gray-900 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-gray-200"
        ></div>
      </label>
    </div>
  );
};

export default ToggleBtn;
