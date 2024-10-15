import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import supabase from "../Services/supabase/supabaseClient";
import { BsArrowRightCircle, BsCurrencyDollar } from "react-icons/bs";

const reservationFromSchema = z.object({
  fullname: z.string().min(6).max(25),
  email: z.string().email(),
  reservation_date: z.string(),
  credit_card: z.string().regex(/^\d{13,19}$/, "invalid card number"),
});

const ReservationForm = () => {
  const [reservationPlan, setReservationPlan] = useState("regular");
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const [err, setErr] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(reservationFromSchema),
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "#1c1917";
    } else {
      document.body.style.backgroundColor = "#dcdbd7";
    }
  }, [isDarkMode]);

  const submit = async (data) => {
    const { error } = await supabase.from("Reservations").insert({
      created_at: new Date().toLocaleString(),
      full_name: data.fullname,
      email: data.email,
      reservation_date: data.reservation_date,
      credit_number: data.credit_card,
      reservation_plan: reservationPlan,
      totalToPay:
        reservationPlan === "vip"
          ? 120.0
          : reservationPlan === "regular"
          ? 45.0
          : 75.0,
    });

    if (error) {
      setTimeout(() => {
        setErr(false);
      }, 2000);
      setErr(true);
    }
  };
  return (
    <section className="sm:w-[90%] xxxs:w-full h-fit  bg-stone-800 mx-auto xxxs:my-[4.5rem] sm:mt-20 md:mt-32 xl:mt-44 sm:rounded-2xl py-10 pt-5 sm:px-10 xs:max-sm:px-6 xxxs:px-3">
      <div className="flex sm:items-center xxxs:max-sm:flex-col xxxs:max-sm:items-start xxxs:max-sm:gap-4 sm:justify-between w-full">
        <h1 className="text-6xl md:max-lg:text-5xl sm:text-4.25xl xs:text-[3rem] xxxs:text-[2rem] xxs:text-4xl font-blacker_cond_med sm:text-left text-wheat xxxs:max-sm:w-full xxxs:max-sm:text-center">
          Make a reservation
        </h1>
        <p className="font-montserrat_black text-xl sm:max-md:text-lg text-stone-50 flex items-center sm:self-end xxxs:max-sm:hidden">
          Total:{" "}
          {reservationPlan === "vip"
            ? (120.0).toFixed(1)
            : reservationPlan === "regular"
            ? (45.0).toFixed(1)
            : (75.0).toFixed(1)}
          <BsCurrencyDollar className="text-lg" />
        </p>
      </div>
      <form
        className="flex flex-col gap-y-5 mt-12"
        onSubmit={handleSubmit(submit)}
      >
        <div className="grid min-[900px]:grid-cols-2 grid-cols-1 grid-rows-3 gap-x-10 gap-y-5">
          <div className="flex flex-col items-start gap-1 col-span-1">
            <label
              htmlFor="name"
              className="font-montserrat_sb text-md text-stone-300"
            >
              Name
            </label>
            <input
              {...register("fullname")}
              type="text"
              placeholder="Name"
              id="name"
              className="p-2 w-full border-2 rounded-md bg-stone-300 text-stone-700 placeholder:text-stone-500 font-Josefin_Regular border-stone-900 focus:outline-none"
            />
            {errors.fullname && (
              <p className="text-md text-red-700 font-montserrat_med xxxs:max-xxs:text-vs">
                {errors.fullname.message}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start gap-1 min-[900px]:col-start-2 col-start-1">
            <label
              htmlFor="email"
              className="font-montserrat_sb text-md text-stone-300"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="Email"
              className="p-2 w-full border-2 rounded-md bg-stone-300 text-stone-700 placeholder:text-stone-500 font-Josefin_Regular border-stone-900 focus:outline-none"
            />
            {errors.email && (
              <p className="text-md text-red-700 font-montserrat_med">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col items-start gap-1 col-span-1 col-start-1 row-span-1 row-start-2">
            <label
              htmlFor="date"
              className="font-montserrat_sb text-md text-stone-300"
            >
              Reservation for :
            </label>
            <input
              type="date"
              required
              {...register("reservation_date", {
                required: true,
              })}
              id="date"
              max={`${new Date().getFullYear() + 2}-01-01`}
              min={`${new Date().getFullYear() + 1}-03-16`}
              className="p-2 w-full border-2 rounded-md bg-stone-300 text-stone-600 font-Josefin_Regular border-stone-900 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-3 xxxs:max-[900px]:col-start-1">
            <p className="font-montserrat_sb text-md text-stone-300">
              select a plan{" "}
            </p>
            <ul className="flex items-center xs:gap-14 xs:px-10 xxxs:px-5 xxxs:gap-10">
              <li>
                <button
                  className=" text-wheat text-lg font-Josefin_bold "
                  onClick={() => {
                    setReservationPlan("regular");
                  }}
                >
                  Regular
                </button>
              </li>
              <li>
                <button
                  className=" font-Josefin_bold text-lg text-amber-200"
                  onClick={() => {
                    setReservationPlan("outdoor");
                  }}
                >
                  Outdoor
                </button>
              </li>
              <li>
                <button
                  className=" text-orange-400 text-lg font-Josefin_bold "
                  onClick={() => {
                    setReservationPlan("vip");
                  }}
                >
                  VIP
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 col-span-1 row-span-1 row-start-3">
            <label
              htmlFor="credit"
              className="font-montserrat_sb text-md text-stone-300"
            >
              credit card info
            </label>
            <input
              type="text"
              id="credit"
              {...register("credit_card")}
              placeholder="xxxx xxxx xxxx xxxx"
              className="p-2 w-full border-2 rounded-md bg-stone-300 text-stone-700 placeholder:text-stone-500 font-Josefin_Regular border-stone-900 focus:outline-none"
            />
            {errors.credit_card && (
              <p className="text-md text-red-700 font-montserrat_med">
                {errors.credit_card.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="flex items-end gap-0.5 xxs:text-2xl xxxs:text-xl  font-blacker_cond_med text-wheat underline-offset-1 underline decoration-2 col-start-2 col-span-1 row-span-1 xxxs:max-[900px]:col-start-1 xxxs:max-[900px]:mt-6 xxxs:max-[900px]:justify-end justify-center "
          >
            {isSubmitting ? "Submitting" : "Submit your reservation"}{" "}
            <BsArrowRightCircle aria-hidden="true" className=" text-2xl" />
          </button>
        </div>
        {err ? (
          <p className=" text-base text-nowrap text-red-600 font-Josefin_Regular xxxs:max-xxs:text-xs xxxs:max-xxs:-bottom-6">
            An error has occured. try again
          </p>
        ) : null}
      </form>
    </section>
  );
};

export default ReservationForm;
