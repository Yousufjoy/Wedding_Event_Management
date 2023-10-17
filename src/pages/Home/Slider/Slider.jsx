import banner from "../../../assets/banner.png";

const Slider = () => {
  return (
    <div className="lg:flex  lg:mt-[100px] ">
      <div className=" w-1/2 pl-[40px]" data-aos="flip-left">
        <div className=" lg:pl-[120px] pl-[40px]" data-aos-easing="ease-in-out">
          <p className=" text-blue-400  lg:pl-[0px]  md:w-[500px] md:pl-[150px] pl-[25px] w-[250px] lg:text-[#787878] py-2 lg:pt-[175px] pt-[60px] text-2xl lg:text-base font-normal uppercase tracking-widest leading-tight">
            Life is an event
          </p>
          <h1 className=" md:w-[500px] md:pl-[120px] lg:pl-[0px] w-[300px] lg:w-full text-[#787878] font-normal uppercase tracking-widest leading-tight lg:text-6xl text-4xl">
            Creating the <br /> Best Day Ever
          </h1>
          <p className="  md:w-[500px] lg:ml-[0px] ml-[40px] text-center lg:text-start lg:w-[500px] w-[200px] py-[30px]">
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
