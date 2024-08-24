import { useRef } from "react";
import Search from "./Search";

const InputBox = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="flex items-center relative mt-8 mb-4">
      <Search inputRef={inputRef} />
      <input
        ref={inputRef}
        type="text"
        placeholder="search..."
        className="w-full border border-gray-400 h-10 rounded-lg px-10 focus:outline-none"
      />
    </div>
  );
};

export default InputBox;
