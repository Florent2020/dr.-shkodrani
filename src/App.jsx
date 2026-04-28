import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: #f4f8fb;
    color: #07182c;
    font-family: 'Inter', sans-serif;
  }
  a { color: inherit; text-decoration: none; }
  button, input, select, textarea { font-family: inherit; }
`;

const Shell = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

function App() {
  const location = useLocation();

  return (
    <Shell>
      <ScrollToTop />
      <GlobalStyle />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookAppointment />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Shell>
  );
}

export default App;
