import React from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  name: string;
  type?: string;
  register: any;
  placeholder: string;
  error?: FieldError;
  className: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  register,
  error,
  placeholder,
  className,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`${className} bg-background p-3 w-full rounded-full ${
          error && "border border-red-500"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default InputField;
