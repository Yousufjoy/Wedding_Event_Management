import Planning from "../Planning/Planning";
import Services from "../Services/Services";
import Slider from "./Slider/Slider";
import Testimonial from "./TestiMonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Planning></Planning>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
