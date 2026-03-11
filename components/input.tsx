import { UseFormRegisterReturn } from "react-hook-form";

interface Input {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const Input = ({ type, placeholder, register }: Input) => {
  return (
    <input
      type={type}
      className="w-full h-14 border border-primary px-6 focus:outline-none focus:ring-0 placeholder:text-secondary"
      placeholder={placeholder}
      {...register}
    />
  );
};

export default Input;
