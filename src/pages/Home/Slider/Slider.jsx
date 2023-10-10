import banner from "../../../assets/banner.png";

const Slider = () => {
  return (
    <div className="lg:flex  lg:mt-[100px]">
      <div className=" w-1/2 pl-[50px]" data-aos="flip-left">
        <div className=" lg:pl-[120px] pl-[60px]" data-aos-easing="ease-in-out">
          <p className="text-[#787878] py-2 lg:pt-[175px] pt-[60px] text-base font-normal uppercase tracking-widest leading-tight">
            Life is an event
          </p>
          <h1 className="text-[#787878] font-normal uppercase tracking-widest leading-tight lg:text-6xl text-4xl">
            Creating the <br /> Best Day Ever
          </h1>
          <p className=" lg:text-start lg:w-[500px] w-[200px] py-[30px]">
            A wedding event is a joyous and significant celebration that marks
            the union of two people in love. It is a day filled with emotions,
            traditions, and cherished moments.
          </p>
        </div>
      </div>
      <div data-aos="zoom-in-up">
        <img className=" lg:w-full" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Slider;
