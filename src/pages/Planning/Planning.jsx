import planning from "../../assets/planning.png";

const Planning = () => {
  return (
    <>
      <div className=" pt-[25px] pr-[100px] lg:pt-[50px] pl-[100px] lg:pl-[0px]">
        <h1
          className="text-[#787878]  text-3xl text-center py-2 uppercase tracking-widest leading-tight"
          data-aos="flip-right"
        >
          About Us
        </h1>
        <div className="lg:flex my-[50px] lg:my-[100px] lg:mt-[100px] lg:pl-[120px] pl-[60px]">
          <div>
            <img className="lg:w-full" src={planning} alt="" />
          </div>
          <div className=" w-1/2 ">
            <div className=" lg:pl-[120px] ">
              <p className="text-[#787878] py-2 lg:pt-[175px]  text-base font-normal uppercase tracking-widest leading-tight ">
                It’s all in the details
              </p>
              <h1 className="text-[#787878] font-normal uppercase tracking-widest leading-tight lg:text-5xl text-2xl">
                Planning your perfect <br /> wedding is our passion
              </h1>
              <p className=" text-start w-[500px] py-[30px]"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planning;
