import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Socials = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex space-x-4 px-">
      {tags.map((tag, index) => {
        if (tag === "linkedIn") {
          return <FaLinkedin key={index} className="h-6 w-6 cursor-pointer" />;
        }
        if (tag === "twitter") {
          return (
            <FaSquareXTwitter key={index} className="h-6 w-6 cursor-pointer" />
          );
        }
      })}
    </div>
  );
};

export default Socials;
