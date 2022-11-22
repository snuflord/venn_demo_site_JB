import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experts from "../components/Experts";
import TopTalent from "../components/TopTalent";
import LatestRoles from "../components/LatestRoles";
import LatestInsights from "../components/LatestInsights";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Experts />
        <TopTalent />
        <LatestRoles />
        <LatestInsights />
        <Footer />
    </>
        
    
  )
}

export default Homepage