import { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import { UserSchema, userSchema } from "./schemas/userSchema";
import { useZodForm } from "./hooks/useZodForm";
import FormField from "../components/shared/FormField";
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
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useZodForm(userSchema, {
    defaultValues: {
      userName: "",
      userEmail: "",
      userPhone: "",
      message: "",
      date: new Date().toISOString(),
    },
  });
  const onSubmit = async (data: UserSchema) => {
    if (formRef.current) {
      try {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );
        toast.success("Message sent successfully!", {
          className:
            "bg-lime-500 text-white rounded-lg flex justify-center p-4",
        });
        reset();
      } catch (error: any) {
        toast.error(`Message failed: ${error}`, {
          className:
            "bg-red-500 text-white w-[300px] rounded-lg shadow-lg flex justify-center p-4",
        });
      }
    }
  };

  return (
    <div className="mt-10">
      <Toaster position="top-right" reverseOrder={false} gutter={8} />
      <h1 className="text-4xl font-bold leading-relaxed">Get In Touch</h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 m-auto p-5 flex flex-col gap-6 sm:w-3/4"
      >
        <div>
          <FormField
            type="text"
            name="userName"
            placeholder="Your Name*"
            register={register}
            error={errors.userName}
            className={`bg-background p-3 w-full rounded-full dark:text-white ${
              errors.userName && "border border-red-500"
            }`}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <FormField
              type="email"
              name="userEmail"
              register={register}
              placeholder="Your Email*"
              className={`bg-background p-3 w-full rounded-full dark:text-white ${
                errors.userEmail && "border border-red-500"
              }`}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <FormField
              type="text"
              name="userPhone"
              register={register}
              placeholder="Your Phone*"
              className={`bg-background p-3 w-full rounded-full dark:text-white ${
                errors.userPhone && "border border-red-500"
              }`}
            />
          </div>
        </div>
        <div>
          <FormField
            name="message"
            type="textarea"
            register={register}
            placeholder="Your Message Here..."
            className={`bg-background p-3 w-full rounded-3xl dark:text-white ${
              errors.message && "border border-red-500"
            }`}
          ></FormField>
        </div>
        <input type="hidden" {...register("date")} />
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
