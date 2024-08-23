import { ReactElement } from "react";

interface AvatarProps {
  w: number;
  h: number;
  icon: ReactElement;
}

const Avatar = ({ w, h, icon }: AvatarProps) => {
  return (
    <div
      className={`grid place-items-center w-${w} h-${h} rounded-full bg-gray-200`}
    >
      {icon}
    </div>
  );
};

export default Avatar;
