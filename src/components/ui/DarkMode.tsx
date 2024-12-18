"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer duration-300"
    >
      <p>
        {theme === "dark" ? (
          <Sun className="text-white hover:text-[#faf488]" />
        ) : (
          <Moon className="text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-300" />
        )}
      </p>
    </div>
  );
}
