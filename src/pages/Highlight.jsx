import { useLocation } from "@tanstack/react-router";
import BackgroundTopic from "../components/Highlight/BackgroundTopic";
import DemoTry from "../components/Highlight/DemoTry";
import Feature from "../components/Highlight/Feature";
import GetInTouch from "../components/Highlight/GetInTouch";
import Hero from "../components/Highlight/Hero";
import SystemDisplay from "../components/Highlight/SystemDisplay";
import { useEffect } from "react";

export default function Highlight() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <Hero />
      <BackgroundTopic />
      <Feature />
      <SystemDisplay />
      <DemoTry />
      <GetInTouch />
    </>
  );
}
