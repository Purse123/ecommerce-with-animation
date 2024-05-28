// import Hero from "./components/hero/Hero"
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/hero/Navbar";

import Home from "./components/navbar-links/Home";
import Services from "./components/navbar-links/Services";
import CaseStudies from "./components/navbar-links/CaseStudies";
import AboutUs from "./components/navbar-links/AboutUs";
import Blog from "./components/navbar-links/Blog";

function App() {

  let location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
