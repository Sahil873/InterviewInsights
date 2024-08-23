const Pill = ({ text }: { text: string }) => {
  return (
    <div className="px-2 py-1 text-sm bg-gray-100 rounded-full">{text}</div>
  );
};

export default Pill;
