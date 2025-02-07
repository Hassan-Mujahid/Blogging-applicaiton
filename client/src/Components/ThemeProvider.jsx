import React from "react";
import { useSelector } from "react-redux";
const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((state) => state.theme);
  console.log("From Theme-Provider", theme);

  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,32,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
