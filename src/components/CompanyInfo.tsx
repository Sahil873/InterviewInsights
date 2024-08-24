import LabelledInput from "./LabelledInput";
import RadioInput from "./RadioInput";

const CompanyInfo = ({ register, errors }) => {
  console.log(errors);
  return (
    <div className="mt-4 border border-gray-400">
      <h1 className="text-xl border-r border-b w-fit p-2 font-medium text-left shadow-lg">
        Company Information
      </h1>
      <div className="flex space-x-4 m-4">
        <LabelledInput
          label={"Company Name"}
          placeholder={"Company Name"}
          extraClass={"flex-1"}
          register={register}
          registerText={"companyName"}
          errors={errors}
        />
        <LabelledInput
          label={"Position Applied For"}
          placeholder={"Position"}
          extraClass={"flex-1"}
          register={register}
          registerText={"position"}
          errors={errors}
        />
      </div>
      <div className="px-4 pb-4">
        <div className="flex flex-col">
          <h4 className="tracking-tighter">Interview Type</h4>
          <div
            {...register("interviewType")}
            className="flex items-center space-x-4"
          >
            <RadioInput
              label={"On-site"}
              register={register("interviewType")}
            />
            <RadioInput label={"Remote"} register={register("interviewType")} />
            <RadioInput label={"Hybrid"} register={register("interviewType")} />
          </div>
        </div>
        {errors.interviewType && (
          <p className="text-red-600 text-sm">{errors.interviewType.message}</p>
        )}
      </div>
    </div>
  );
};

export default CompanyInfo;
