import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";
const PUBLIC_KEY = "zBWtRlGZeDN7TMlkz";
const SERVICE_ID = "service_j1auat8";
const TEMPLATE_ID = "template_6jskj0l";
const userDataSchema = z.object({
  userName: z.string().min(1, "Please enter your name."),
  userEmail: z.string().email("Please enter a valid email address."),
  userPhone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number."),
  message: z.string().min(1, "Please enter your message."),
  date: z.string(),
});

type UserData = z.infer<typeof userDataSchema>;

function GetInTouch() {
  const [userData, setUserData] = useState<UserData>({
    userName: "",
    userEmail: "",
    userPhone: "",
    message: "",
    date: new Date().toISOString(),
  });

  const [errors, setErrors] = useState<Record<string, string>>({
    userName: "",
    userEmail: "",
    userPhone: "",
    message: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));

    try {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: (error as z.ZodError).issues[0]?.message || "",
      }));
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = userDataSchema.safeParse(userData);

    if (!validation.success) {
      const newErrors: Record<string, string> = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) newErrors[error.path[0]] = error.message;
      });
      setErrors(newErrors);

      toast.error("Please fix the errors before submitting.", {
        className:
          "bg-red-500 text-white w-[300px] rounded-lg shadow-lg flex justify-center p-4",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        position: "top-center",
      });
      return;
    }

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        () => {
          setTimeout(() => {
            toast.success("Message sent successfully!", {
              className:
                "bg-lime-500 text-white rounded-lg flex justify-center p-4",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              position: "top-center",
            });
          }, 100);
          setUserData({
            userName: "",
            userEmail: "",
            userPhone: "",
            message: "",
            date: new Date().toISOString(),
          });
        },
        (error) => {
          setTimeout(() => {
            toast.error(`Message failed: ${error.text}`, {
              className:
                "bg-red-500 text-white w-[300px] rounded-lg shadow-lg flex justify-center p-4",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              position: "top-center",
            });
          }, 100);
        }
      );
    }
  };

  return (
    <div className="mt-10">
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        position="top-center"
      />
      <h1 className="text-4xl font-bold leading-relaxed">Get In Touch</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 m-auto md:p-5 flex flex-col gap-6 w-full lg:w-3/4"
      >
        <div>
          <input
            type="text"
            name="userName"
            placeholder="Your Name*"
            onChange={handleChange}
            value={userData.userName}
            className={`bg-background p-3 w-full rounded-full dark:text-white ${
              errors.userName && "border border-red-500"
            }`}
          />
          {errors.userName && (
            <p className="text-red-500 ms-5">{errors.userName}</p>
          )}
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <input
              type="email"
              name="userEmail"
              onChange={handleChange}
              value={userData.userEmail}
              placeholder="Your Email*"
              className={`bg-background p-3 w-full rounded-full dark:text-white ${
                errors.userEmail && "border border-red-500"
              }`}
            />
            {errors.userEmail && (
              <p className="text-red-500 ms-5">{errors.userEmail}</p>
            )}
          </div>
          <div className="w-full lg:w-1/2">
            <input
              type="text"
              name="userPhone"
              onChange={handleChange}
              value={userData.userPhone}
              placeholder="Your Phone*"
              className={`bg-background p-3 w-full rounded-full dark:text-white ${
                errors.userPhone && "border border-red-500"
              }`}
            />
            {errors.userPhone && (
              <p className="text-red-500 ms-5">{errors.userPhone}</p>
            )}
          </div>
        </div>
        <div>
          <textarea
            name="message"
            cols={30}
            rows={10}
            onChange={handleChange}
            value={userData.message}
            placeholder="Your Message Here..."
            className={`bg-background p-3 w-full rounded-3xl dark:text-white ${
              errors.message && "border border-red-500"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 ms-5">{errors.message}</p>
          )}
        </div>
        <input type="hidden" name="date" value={userData.date} />
        <button
          type="submit"
          className="customShadow p-4 lg:w-1/4 self-end dark:text-dark dark:font-bold dark:text-xl dark:border-2 dark:border-slate-800 rounded-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default GetInTouch;
