import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import { useZodForm } from "../components/hooks/useZodForm";
import FormField from "../components/shared/FormField";
import { UserSchema, userSchema } from "./schemas/userSchema";

const PUBLIC_KEY = "zBWtRlGZeDN7TMlkz";
const SERVICE_ID = "service_j1auat8";
const TEMPLATE_ID = "template_6jskj0l";

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
        console.log(data);

        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );

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

        reset();
      } catch (error: any) {
        toast.error(`Message failed: ${error}`, {
          className:
            "bg-red-500 text-white w-[300px] rounded-lg shadow-lg flex justify-center p-4",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          position: "top-center",
        });
      }
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
            className={`bg-background p-3 w-full rounded-full ${
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
              className={`bg-background p-3 w-full rounded-full ${
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
              className={`bg-background p-3 w-full rounded-full ${
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
            className={`bg-background p-3 w-full rounded-3xl ${
              errors.message && "border border-red-500"
            }`}
          ></FormField>
        </div>
        <input type="hidden" {...register("date")} />
        <button type="submit" className="customShadow p-4 w-1/4 self-end">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default GetInTouch;
