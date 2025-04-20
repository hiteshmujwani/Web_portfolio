"use client"; // Client component since we use hooks

import { useTheme } from "@/app/context/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme}>
      <Button className="dark:bg-[#EEEEED]">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    </div>
  );
};

export default ThemeToggle;
