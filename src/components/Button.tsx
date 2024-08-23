import { Link } from "react-router-dom";
import Plus from "./Plus";

const Button = () => {
  return (
    <Link
      to={"/new"}
      className="flex items-center p-2 bg-black text-white rounded-lg cursor-pointer hover:opacity-80 transition-all"
    >
      <Plus /> <span className="hidden md:inline-block">Add Experience</span>
    </Link>
  );
};

export default Button;
