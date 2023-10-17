import planning from "../../assets/planning.png";

const Planning = () => {
  return (
    <>
      <div className=" pt-[25px] pr-[100px] lg:pt-[50px]  ">
        <div className=" ml-[50px]  lg:mt-[0px] mt-[50px]">
          <h1 className="ml-[60px] text-[#787878] text-3xl lg:text-3xl text-center py-2 uppercase tracking-widest leading-tight">
            About Us
          </h1>
        </div>
        <div
          className=" w-full ml-[50px] lg:flex my-[50px] lg:my-[100px] lg:mt-[100px] lg:pl-[120px] "
          data-aos="zoom-in-up"
        >
          <div>
            <img src={planning} alt="" />
          </div>
          <div className="lg:w-1/2">
            <div className="lg:pl-[120px]">
              <p className=" lg:pl-[0px] mt-[50px] lg:mt-[0px] md:pl-[210px] pl-[30px] text-[#787878] py-2 lg:pt-[175px] text-xl lg:text-base font-normal uppercase tracking-widest leading-tight">
                It’s all in the details
              </p>
              <h1 className="lg:mt-[0px] lg:text-start mt-[20px] text-center text-[#787878] font-normal uppercase tracking-widest leading-tight lg:text-5xl text-2xl">
                Planning your perfect <br /> wedding is our passion
              </h1>
              <p className="text-start py-[30px] text-base lg:text-lg">
                {/* Add your content here */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planning;
