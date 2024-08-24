import { useLocation } from "react-router-dom";
import Button from "./Button";

const Appbar = () => {
  const { pathname } = useLocation();

  return (
    <header className="w-full h-16 grid grid-cols-12">
      <div className="col-span-1 md:col-span-2 lg:col-span-3"></div>
      <div className="border-b border-gray-300 h-full flex items-center justify-between col-span-10 md:col-span-8 lg:col-span-6">
        <h1 className="text-2xl font-semibold tracking-tighter ">
          {pathname === "/experiences"
            ? "InterviewInsights"
            : "Add Interview Experience"}
        </h1>
        {pathname === "/experiences" && <Button />}
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3"></div>
    </header>
  );
};

export default Appbar;
