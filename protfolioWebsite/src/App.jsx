import { useState, useEffect } from "react";
import "./App.css";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import { ThemeProvider } from "./Context/theme";
import ThemeBtn from "./Components/ThemeBtn";
import Footer from "./Components/Footer";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const ligthTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("ligth", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, ligthTheme, darkTheme }}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <ContactForm />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
