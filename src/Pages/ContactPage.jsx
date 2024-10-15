import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactHero from "../Components/ContactHero";
import BentoSection from "../Components/BentoSection";
import { useSelector } from "react-redux";

import { Helmet } from "react-helmet-async";

const ContactPage = () => {
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
        <title>Contact | Fable Flav</title>
        <meta
          name="description"
          content="Contact us for any questions, inquiries, or reservations. We're here to help."
        />
        <meta
          name="keywords"
          content=" dish,dinner, flavour, fable flav, restaurant, contact, reservation"
        />
        <meta property="og:title" content="Contact | Fable Flav" />
        <meta
          property="og:description"
          content="Contact us for any questions, inquiries, or reservations."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <ContactHero />
      <BentoSection />
      <Footer />
    </>
  );
};

export default ContactPage;
