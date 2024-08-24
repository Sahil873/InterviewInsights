import Card from "../components/Card";
import InputBox from "../components/InputBox";

const Home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 md:col-span-2 lg:col-span-3"></div>
      <div className="col-span-10 md:col-span-8 lg:col-span-6">
        <InputBox />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3"></div>
    </div>
  );
};

export default Home;
