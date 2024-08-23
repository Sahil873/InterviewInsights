import Avatar from "./Avatar";
import Brief from "./Brief";
import Socials from "./Socials";
import Tags from "./Tags";
import User from "./User";

const UserCard = () => {
  return (
    <>
      <div className="flex mt-2 p-6 bg-gray-100 rounded-lg">
        <Avatar w={14} h={12} icon={<User />} />
        <div className="flex items-start w-full flex-col mx-4">
          <div className="w-full pb-4">
            <h1 className="text-lg font-bold">John Doe</h1>
            <h4 className="text-gray-500 -mt-1 text-md">
              Senior Developer at TechCo
            </h4>
          </div>
          <Socials tags={["linkedIn", "twitter"]} />
        </div>
      </div>
      <Brief />
      <Tags tags={["Data Structures", "Algorithms", "System Design"]} />
    </>
  );
};

export default UserCard;
