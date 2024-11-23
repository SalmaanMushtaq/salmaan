import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useZodForm = <T extends z.ZodType<any, any>>(
  schema: T,
  options?: UseFormProps<z.infer<T>>
) => {
  return useForm<z.infer<T>>({
    ...options,
    resolver: zodResolver(schema),
  });
};
