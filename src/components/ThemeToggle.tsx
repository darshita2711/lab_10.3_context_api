
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeToggle must be inside ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  return (
    <div>
      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
