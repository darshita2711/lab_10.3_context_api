
import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

function ThemeProvider({ children }: ThemeProviderProps) {
  // Load saved theme from localStorage
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "dark" ? "dark" : "light";
  });

  // Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
