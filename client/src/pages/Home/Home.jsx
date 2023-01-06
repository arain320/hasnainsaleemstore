import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Hero from "../../components/Hero/Hero";
import Company from "../../components/Company/Company";
import Product from "../../components/Product/Product";
import Contact from "../../components/Contact/Contact";
import GoTop from "../../components/goToTop/GoTop";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <Hero />
      <Company />
      <Product />
      <Contact/>
      <GoTop />
      <Footer />
    </>
  );
};

export default Home;
