import Apartment from "./Apartment";
import Avatar from "./Avatar";
import Pill from "./Pill";

const CardBar = () => {
  return (
    <div className="flex items-center ">
      <div className="flex-1 flex">
        <Avatar w={16} h={14} icon={<Apartment />} />
        <div className="mx-4 w-full">
          <h1 className="text-2xl font-bold">Google</h1>
          <h4 className="text-gray-500 -mt-1">Software Engineer Position</h4>
        </div>
      </div>
      <Pill text="on-site" />
    </div>
  );
};

export default CardBar;
