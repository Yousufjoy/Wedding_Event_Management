import Services from "../Services/Services";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <h2 className=" text-center text-6xl py-4">Creating the Best Day Ever</h2>
      <Slider></Slider>
      <Services></Services>
    </div>
  );
};

export default Home;
