import LabelledInput from "./LabelledInput";

const UserInfo = ({ register, errors }) => {
  return (
    <div className="mt-4 border border-gray-400">
      <h1 className="text-xl border-r border-b w-fit p-2 font-medium text-left shadow-lg">
        Your Information
      </h1>
      <div className="grid grid-cols-12 mt-4 space-x-4 pb-4">
        <div className="col-span-6 pl-4 ">
          <div className="flex flex-col space-y-4">
            <h4 className="text-[1.25rem] tracking-tighter self-center">
              Personal
            </h4>
            <LabelledInput
              label={"Your Name"}
              placeholder={"Name"}
              extraClass={"flex-1"}
              register={register}
              registerText={"userName"}
              errors={errors}
            />
            <LabelledInput
              label={"Current Position"}
              placeholder={"Position"}
              extraClass={"flex-1"}
              register={register}
              registerText={"currentPosition"}
              errors={errors}
            />
            <LabelledInput
              label={"Your Institue"}
              placeholder={"institute"}
              extraClass={"flex-1"}
              register={register}
              registerText={"institute"}
              errors={errors}
            />
          </div>
        </div>
        <div className="col-span-6 pr-4">
          <div className="flex flex-col space-y-4">
            <h4 className="text-[1.25rem] tracking-tighter self-center">
              Social
            </h4>
            <LabelledInput
              label={"LinkedIn"}
              placeholder={"LinkedIn Url"}
              extraClass={"flex-1"}
              register={register}
              registerText={"linkedIn"}
              errors={errors}
            />
            <LabelledInput
              label={"Twitter"}
              placeholder={"Twitter Url"}
              extraClass={"flex-1"}
              register={register}
              registerText={"twitter"}
              errors={errors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
