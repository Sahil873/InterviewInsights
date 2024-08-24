import { SubmitHandler, useForm } from "react-hook-form";
import CompanyInfo from "../components/CompanyInfo";
import {
  companySchema,
  CompanyType,
  userSchema,
  UserType,
} from "../validation";
import { zodResolver } from "@hookform/resolvers/zod";
import UserInfo from "../components/UserInfo";
import zod from "zod";

const FormSchema = zod.object({
  ...companySchema.shape,
  ...userSchema.shape,
});

const New = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CompanyType & UserType>({
    defaultValues: {
      companyName: "",
      position: "",
      interviewType: undefined,
      userName: "",
      currentPosition: "",
      institute: "",
      linkedIn: "",
      twitter: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<CompanyType & UserType> = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 md:col-span-2 lg:col-span-3"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="col-span-10 md:col-span-8 lg:col-span-6"
      >
        <CompanyInfo register={register} errors={errors} />
        <UserInfo register={register} errors={errors} />
      </form>
      <div className="col-span-1 md:col-span-2 lg:col-span-3"></div>
    </div>
  );
};

export default New;
