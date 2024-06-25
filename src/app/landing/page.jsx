"use client"
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// Component import
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import CarList from "./CarList/CarList";



import Footer from "./Footer/Footer";

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, setThemeMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#007bff',
      },
      secondary: {
        main: '#6c757d',
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={`bg-${themeMode === 'dark' ? 'dark' : 'white'} text-${themeMode === 'dark' ? 'white' : 'black'} overflow-x-hidden`}>
        <Navbar theme={themeMode} toggleTheme={toggleTheme} />
        <Hero theme={themeMode} />
        <About />
        <Services />
        <CarList />
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
