import { useEffect, useState } from "react";

import "./App.css";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const [themeMode, setThemeMode] = useState("Ligth");

  const ligthTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("Ligth", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, ligthTheme, darkTheme }}>
      <Navbar />

      <ThemeBtn />

      <Card />
    </ThemeProvider>
  );
}

export default App;
