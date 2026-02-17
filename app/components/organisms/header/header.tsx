"use client"

import { ReactElement, useEffect, useState } from "react";
import IconComponent from "../../atoms/icon/icon";

const HeaderComponent = (): ReactElement => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detecta si el sistema prefiere modo oscuro o si la clase ya está presente
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hasDarkClass = document.documentElement.classList.contains("dark");

    if (hasDarkClass || isSystemDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prev) => !prev);
  };

  return (
    <header className="flex flex-row justify-between items-center w-xs mb-3 md:w-xl">
      <h1 className="uppercase font-bold text-xl text-gray-50 md:text-2xl">todo</h1>

      <button className="hover:cursor-pointer" onClick={toggleTheme}>
        <IconComponent type={isDark ? "sun" : "moon"} classImg="md:w-[2em] md:h-[2em]" />
      </button>
    </header>
  );
};

export default HeaderComponent;
