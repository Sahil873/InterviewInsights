import CardBar from "./CardBar";
import UserCard from "./UserCard";

const Card = () => {
  return (
    <div className="py-8 my-2 border-b border-gray-300 p-2 hover:scale-110 transition-all hover:shadow-xl">
      <CardBar />
      <UserCard />
    </div>
  );
};

export default Card;
