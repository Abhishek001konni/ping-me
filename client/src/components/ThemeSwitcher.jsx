import React, { useEffect, useState } from "react";

const THEMES = [
  "light",
  "dark",
  "synthwave",
  "retro",
  "cyberpunk",
  "halloween",
  "aqua",
  "black",
  "luxury",
  "dracula",
  "lemonade",
  "night",
  "coffee",
  "dim",
];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs opacity-70">Theme</span>
      <select
        className="select select-bordered select-sm w-full"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {THEMES.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
