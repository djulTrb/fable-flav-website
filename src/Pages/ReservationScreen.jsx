import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ReservationForm from "../Components/ReservationForm";

import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

const ReservationScreen = () => {
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
        <title>Reservation | Fable Flav</title>
        <meta
          name="description"
          content="different plans for everyone and what suits them best"
        />
        <meta
          name="keywords"
          content=" dish,dinner, flavour, fable flav, restaurant, dinner experience, eat, taste, reservation,menu,drinks,dessert,starter,main course"
        />
        <meta property="og:title" content="Reservation | Fable Flav" />
        <meta
          property="og:description"
          content="different plans for everyone and what suits them best."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <ReservationForm />
      <Footer />
    </>
  );
};

export default ReservationScreen;
