import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import AsideFilter from "../Components/AsideFilter";
import Menu from "../Components/Menu";
import TopFilter from "../Components/TopFilter";

import { useSelector, useDispatch } from "react-redux";

import supabase from "../Services/supabase/supabaseClient";

import { useQuery } from "@tanstack/react-query";

import { setMenuItems } from "../store/menuOpSlice";

import { Helmet } from "react-helmet-async";

const MenuPage = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const [Error, setError] = useState(false);

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

  const { isLoading } = useQuery({
    queryKey: ["dish"],
    queryFn: async () => {
      const { data, error } = await supabase.from("Dish info").select();
      if (error) {
        setError(true);
        console.log(error);
      } else {
        setError(false);
      }
      dispatch(setMenuItems(data));
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Menu | Fable Flav</title>
        <meta
          name="description"
          content="here are the variety of dishes we serve with a resonable prices, it is a not to miss experience"
        />
        <meta
          name="keywords"
          content=" dish,dinner, flavour, fable flav, restaurant, dinner experience, eat, taste, reservation,menu,drinks,dessert,starter,main course"
        />
        <meta property="og:title" content="Menu | Fable Flav" />
        <meta
          property="og:description"
          content="here are the variety of dishes we serve with a resonable prices, it is a not to miss experience."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <TopFilter />
      <main className="grid grid-cols-12 mt-16 xxxs:max-xs:mb-32">
        <AsideFilter />
        <Menu err={Error} isLoading={isLoading} />
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
