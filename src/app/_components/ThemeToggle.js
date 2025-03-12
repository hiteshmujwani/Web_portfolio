"use client"; // Client component since we use hooks

import { useTheme } from "@/app/context/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme}>
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </div>
  );
};

export default ThemeToggle;
