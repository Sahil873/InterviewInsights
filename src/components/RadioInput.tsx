import { UseFormRegisterReturn } from "react-hook-form";

interface RadioInputProps {
  label: string;
  register: UseFormRegisterReturn;
}

const RadioInput = ({ label, register }: RadioInputProps) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        {...register}
        value={label}
        id={label}
        type="radio"
        className="border border-gray-300 p-2 rounded-lg"
      />
      <label htmlFor={label} className="whitespace-nowrap text-sm">
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
