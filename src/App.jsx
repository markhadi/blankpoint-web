import { Outlet } from "@tanstack/react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 130,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
