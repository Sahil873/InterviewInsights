import Pill from "./Pill";

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex space-x-4 mt-2">
      {tags.map((tag, index) => (
        <span key={index}>
          <Pill text={tag} />
        </span>
      ))}
    </div>
  );
};

export default Tags;
