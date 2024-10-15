import React, { useState } from "react";
import fire from "../Assets/Images/3D_Icons/fire.webp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import supabase from "../Services/supabase/supabaseClient";

const ContactFormSchema = z.object({
  fullname: z
    .string()
    .min(6, "at least 6 characters")
    .max(25, "at most 25 characters"),
  email: z.string().email(),
  subject: z.string().min(4, "subject must be at least 4 characters"),
  messageText: z.string().min(10, "message must be at least 10 characters"),
});

const Form = () => {
  const [err, setErr] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
  });

  const submit = async (data) => {
    const { data: message, error } = await supabase
      .from("Contact messages")
      .insert({
        created_at: new Date().toLocaleString(),
        full_name: data.fullname,
        email: data.email,
        subject: data.subject,
        message: data.messageText,
      });

    if (error) {
      setTimeout(() => {
        setErr(false);
      }, 2000);
      setErr(true);
    }
  };

  return (
    <section className="rounded-3xl bg-stone-300 dark:bg-gradient-to-tl from-[#F5deb3] to-[#fbb569] shadow-darkShadow dark:shadow-lighterWhiteShadow md:p-10 md:pb-14 xxs:p-5 xxxs:py-7 xxxs:p-1  flex flex-col gap-5 overflow-hidden relative lg:col-start-2 lg:row-start-3 lg:col-span-full lg:row-span-full  md:col-start-1 md:col-span-full md:row-start-3 md:row-span-1 xxxs:col-start-1 xxxs:col-span-full xxxs:row-start-3 xxxs:row-span-1">
      <img
        alt="three dimentional icon of a fire"
        src={fire}
        className="absolute -bottom-16 -right-20 w-72 xxxs:max-xxs:w-56"
      />
      <h1 className="font-montserrat_It_black text-5xl leading-none xs:text-4xl xxs:text-[2rem] xxxs:text-2xl xxxs:max-xs:pl-2  sm:max-[680px]:text-4.25xl ">
        What's on your mind
      </h1>
      <form
        className="flex flex-col gap-8 w-11/12 ml-5 xxs:max-sm:ml-2"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex w-5/6 justify-between items-center">
          <div className="flex flex-col w-5/12 relative">
            <label
              htmlFor="fullname"
              className="font-montserrat_sb text-md xxxs:max-xxs:text-sm"
            >
              Full Name
            </label>
            <input
              type="text"
              {...register("fullname", {
                required: true,
              })}
              id="fullname"
              placeholder="full name"
              className={`bg-transparent border-b-2 focus:border-orange-600 border-stone-800   focus:outline-none placeholder:text-vs placeholder:text-gray-700 placeholder:text-opacity-50 p-1 font-Josefin_Regular ml-3 text-orangered`}
            />
            {errors?.fullname && (
              <p className="absolute -bottom-7 left-2 text-sm text-nowrap text-opacity-80 text-red-600 font-Josefin_Regular xxxs:max-xxs:text-xs xxxs:max-xxs:-bottom-6">
                {errors?.fullname?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col w-5/12 relative">
            <label
              htmlFor="email"
              className="font-montserrat_sb text-md xxxs:max-xxs:text-sm"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: true,
              })}
              type="text"
              id="email"
              placeholder="email"
              className={`bg-transparent border-b-2 border-stone-800 focus:outline-none focus:border-orange-600 placeholder:text-vs placeholder:text-gray-700 placeholder:text-opacity-50 p-1 font-Josefin_Regular ml-3 text-orangered`}
            />
            {errors?.email && (
              <p className="absolute -bottom-7 left-2 text-sm text-nowrap text-opacity-80 text-red-600 font-Josefin_Regular xxxs:max-xxs:text-xs xxxs:max-xxs:-bottom-6">
                {errors?.email?.message}
              </p>
            )}
          </div>
        </div>
        <div className=" w-5/6 flex flex-col relative">
          <label
            htmlFor="subject"
            className="font-montserrat_sb text-md xxxs:max-xxs:text-sm"
          >
            Subject
          </label>

          <input
            {...register("subject", {
              required: true,
            })}
            type="text"
            id="subject"
            placeholder="subject"
            className={`bg-transparent border-b-2 border-stone-800  focus:outline-none focus:border-orange-600 placeholder:text-vs text-base placeholder:text-gray-700 placeholder:text-opacity-50 p-1 w-full font-Josefin_Regular ml-3 text-orangered`}
          />
          {errors.subject && (
            <p className="absolute -bottom-7 left-2 text-sm text-nowrap text-opacity-80 text-red-600 font-Josefin_Regular xxxs:max-xxs:text-xs xxxs:max-xxs:-bottom-6">
              {errors?.subject?.message}
            </p>
          )}
        </div>
        <div className="flex justify-between w-5/6">
          <div className="flex flex-col gap-1 w-5/6 xxs:max-xs:w-9/12 relative">
            <label
              htmlFor="messageText"
              className="font-montserrat_sb text-md pb-1.5 xxxs:max-xxs:text-sm"
            >
              Talk us through
            </label>
            <textarea
              {...register("messageText", {
                required: true,
              })}
              id="messageText"
              placeholder="your message"
              spellCheck={false}
              className={`border-stone-800 border-2  bg-transparent focus:border-orange-600 p-1.5 rounded-sm md:w-9/12 xxxs:w-full xs:max-sm:w-11/12 sm:max-md:w-10/12 h-20 xxs:max-xs:h-28 resize-none font-montserrat_med ml-3 focus:outline-none text-stone-900 placeholder:text-sm text-base placeholder:text-gray-700 placeholder:text-opacity-50 `}
            ></textarea>
            {errors.messageText && (
              <p className="absolute -bottom-7 left-2 text-sm text-nowrap text-opacity-80 text-red-600 font-Josefin_Regular xxxs:max-xxs:text-xs xxxs:max-xxs:-bottom-6">
                {errors?.messageText?.message}
              </p>
            )}
          </div>
          <button
            disabled={isSubmitting}
            aria-label="submit button"
            type="submit"
            className="md:block hidden px-10 self-end rounded-3xl p-2 bg-orange-300  font-montserrat_black text-orangered"
          >
            {isSubmitting ? "Sending" : "send"}
          </button>
        </div>
        <button
          className="md:hidden self-start block px-20 xxs:max-xs:px-14 mt-3 ml-3 rounded-3xl p-2 bg-orange-300  font-montserrat_black text-orangered xxxs:max-xs:px-10 xxxs:max-xxs:text-md xxxs:max-xxs:mt-0"
          type="submit"
          aria-label="submit button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending" : "send"}
        </button>
        {err ? (
          <p className=" text-base text-nowrap text-red-600 font-Josefin_Regular xxxs:max-xxs:text-xs xxxs:max-xxs:-bottom-6">
            An error has occured. try again
          </p>
        ) : null}
      </form>
    </section>
  );
};

export default Form;
