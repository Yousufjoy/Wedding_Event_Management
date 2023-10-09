import Navbar from "../Shared/Navbar/Navbar";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className=" text-center text-6xl py-4">Creating the Best Day Ever</h2>
      <Slider></Slider>
    </div>
  );
};

export default Home;
