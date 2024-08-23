import { Link } from "react-router-dom";
import Button from "./Button";

const Appbar = () => {
  return (
    <header className="w-full h-16 border-b border-gray-300 flex items-center justify-between">
      <Link to={"/experiences"} className="text-2xl font-semibold">
        InterviewInsights
      </Link>
      <Button />
    </header>
  );
};

export default Appbar;
