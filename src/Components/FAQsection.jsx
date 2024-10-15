import React from "react";
import SingleFAQ from "./SingleFAQ";
import Blob from "./Blob";

const FAQsection = () => {
  return (
    <section className="dark:bg-stone-900 bg-bg_special w-full xxxs:p-2 xs:p-4 xs:pb-20 sm:pb-24 xxxs:py-8 xxxs:pb-20 sm:py-5 pt-  relative">
      <Blob align="center"></Blob>
      <h1 className="font-soria text-stone-900 dark:text-wheat  xxxs:max-sm:text-5.5xl sm:text-6xl lg:text-7xl text-center z-10 relative mt-10">
        FAQ
      </h1>

      <ul className="flex flex-col items-center xs:mt-14 xxxs:mt-8 backdrop-blur-sm shadow-glassShadowLight bg-softWhiteLight dark:bg-softWhiteDark dark:shadow-glassShadowDark rounded-xl px-1 py-2 max-w-screen-md mx-auto">
        <SingleFAQ
          question="Can I modify or cancel my reservation ?"
          answer="Yes, you can modify or cancel your reservation through your account on our website"
        />
        <SingleFAQ
          question="How will I receive confirmation of my reservation ?"
          answer="Once You complete your reservation, you will receive a confirmation email with the details of your booking. You can also view your reservation in your account on our website"
        />
        <SingleFAQ
          question="How can I contact customer support ?"
          answer="You can reach our customer support team by clicking on 'Contact' section on our website or via email"
        />
        <SingleFAQ
          question="How far in advance can i make a reservation ?"
          answer="We allow reservations to be made up to several months in advance"
        />
        <SingleFAQ
          question="Can I make a last minute reservation ?"
          answer="Yes, we allow same-day reservations, but availability isn't guaranteed depending on the timing of the reservation"
        />
      </ul>
    </section>
  );
};

export default FAQsection;
