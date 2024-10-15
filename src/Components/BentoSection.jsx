import React from "react";
import chair from "../Assets/Images/Contact_page_pics/chair.webp";
import front from "../Assets/Images/Contact_page_pics/restaurant_front.webp";
import Form from "./Form";

const BentoSection = () => {
  return (
    <section className="relative bg-bg_special dark:bg-stone-900 gap-5 py-28 sm:px-10 xs:px-4 xs:max-sm:gap-7 xxxs:px-2 xl:px-24 lg:px-14 w-full grid grid-cols-5 grid-rows-[auto_1fr_1fr_1fr] lg:grid-rows-[8rem_1fr_auto] md:grid-rows-[1fr_10rem_auto] xxxs:grid-rows-[1fr_8rem_auto_10rem]">
      <figure className="h-fit rounded-3xl w-full group overflow-hidden shadow-darkShadow bg-[url('../Assets/Images/loading.jpeg')] bg-[50%] lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-2 xxxs:col-start-1 xxxs:col-span-full xxxs:row-start-1 xxxs:row-span-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.996333089491!2d2.356224375368057!3d48.82013140339959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67181562bec7b%3A0x7608438a6f8851df!2s180%20Av.%20d&#39;Italie%2C%2075013%20Paris%2C%20France!5e0!3m2!1sfr!2sdz!4v1713277796053!5m2!1sfr!2sdz"
          width="500"
          height="300"
          loading="lazy"
          title="navigational frame"
          className="w-full block grayscale-[60%] brightness-90 transition-all duration-700 object-cover group-hover:grayscale-0 rounded-3xl border-orange-400 dark:border-none border-2"
        ></iframe>
      </figure>
      <figure className="relative  rounded-3xl overflow-hidden lg:col-span-1 lg:row-span-1 lg:row-start-3 lg:col-start-1 md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-1 xxxs:col-start-1 xxxs:col-span-full xxxs:row-start-4 xxxs:row-span-1 shadow-CTAShadowLight dark:shadow-none">
        <img
          src={chair}
          alt="a picture taken in our restaurant front"
          className="block w-full h-full object-cover brightness-[80%]"
        />
      </figure>
      <figure className="lg:row-start-1 rounded-3xl overflow-hidden relative lg:col-start-4 lg:col-span-2 lg:row-span-2  md:col-start-3 md:col-span-full md:row-start-2 md:row-span-1 xxxs:col-start-1 xxxs:col-span-full xxxs:row-start-2 xxxs:row-span-1 shadow-CTAShadowLight dark:shadow-none">
        <img
          alt="our restaurant's front side"
          src={front}
          className=" object-cover h-[18.75rem] w-full "
        />
      </figure>
      <Form />
    </section>
  );
};

export default BentoSection;
