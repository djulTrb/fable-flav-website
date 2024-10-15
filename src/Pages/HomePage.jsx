import React, { useEffect } from "react";

import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import FAQsection from "../Components/FAQsection";
import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";

import { useSelector } from "react-redux";

import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "#1c1917";
    } else {
      document.body.style.backgroundColor = "#dcdbd7";
    }
  }, [isDarkMode]);

  return (
    <>
      <Helmet>
        <title>Home | Fable Flav</title>
        <meta
          name="description"
          content="here to serve you best dinner experience and best flavourful dishes ever tasted, just book a table now."
        />
        <meta
          name="keywords"
          content=" dish,dinner, flavour, fable flav, restaurant, dinner experience, eat, taste, reservation,drinks,dessert,starter,main course"
        />
        <meta property="og:title" content="Home | Fable Flav" />
        <meta
          property="og:description"
          content="here to serve you best dinner experience and best flavourful dishes ever tasted, just book a table now."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQsection />
      <CallToAction />
      <Footer />
    </>
  );
};

export default HomePage;
