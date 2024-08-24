import { FieldErrors, UseFormRegister } from "react-hook-form";

interface LabelledInputProps {
  label: string;
  placeholder: string;
  extraClass: string;
  registerText: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldErrors<any>;
}

const LabelledInput = ({
  label,
  placeholder,
  extraClass,
  register,
  registerText,
  errors,
}: LabelledInputProps) => {
  return (
    <div className={"flex flex-col " + extraClass}>
      <label className="mb-2 tracking-tight">{label}</label>
      <input
        type="text"
        placeholder={"Enter " + placeholder}
        className="border border-gray-400 p-2 rounded-lg w-full outline-none"
        {...register(registerText)}
      />
      {errors[registerText] && (
        <p className="text-red-600 text-sm">
          {String(errors[registerText].message)}
        </p>
      )}
    </div>
  );
};

export default LabelledInput;
