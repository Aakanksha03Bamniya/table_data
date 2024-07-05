import React,{useState,useEffect} from "react";
import { ThemeProvider } from "./components/Theme";
import Button from "./components/Button";
import Card from "./components/Card";


const App = () => {
  const [themeMode, setThemeMode]= useState('light')

  const darkMode=()=>{
    setThemeMode('dark')
  }
  const lightMode=()=>{
    setThemeMode('light')
  }


  // actual action 
  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (
    <ThemeProvider value = {{themeMode , darkMode , lightMode}}>
     <div> <Button/></div>
     <div> <Card/></div>
      App
    </ThemeProvider>
  );
};

export default App;
