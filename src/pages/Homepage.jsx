import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experts from "../components/Experts";
import TopTalent from "../components/TopTalent";
import LatestRoles from "../components/LatestRoles";
import LatestInsights from "../components/LatestInsights";
import Footer from "../components/Footer";
import { useRef } from "react";

function Homepage() {
  
  const resultRef = useRef(null);

  return (
    <>
        <Navbar />
        <Hero resultRef={resultRef}/>
        <Experts />
        <TopTalent />
        <LatestRoles ref={resultRef}/>
        <LatestInsights />
        <Footer />
    </>
        
    
  )
}

export default Homepage