import imgx from "../../../assets/img1.jpg";

const Testimonial = () => {
  return (
    <div className=" my-6" id="testimonial ">
      <h1 className="text-[#787878]  text-3xl text-center py-10 uppercase tracking-widest leading-tight">
        Testimonials
      </h1>
      <div className="bg-gray-100 py-12">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="mb-4">
                <img
                  src={imgx}
                  alt="Client 1"
                  className="w-18 h-[150px] rounded-full mx-auto"
                />
              </div>
              <p className="text-gray-600 text-center mb-4">
                "Impressive smartphone with exceptional camera and battery
                life."
              </p>
              <p className="text-gray-800 text-center font-semibold">
                "Masterpiece with captivating storytelling and deep characters."
              </p>
              <p className="text-gray-600 text-center">CEO, Company XYZ</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="mb-4">
                <img
                  src={imgx}
                  alt="Client 2"
                  className="w-18 h-[150px]  rounded-full mx-auto"
                />
              </div>
              <p className="text-gray-600 text-center mb-4">
                "Extraordinary dining experience - elegant ambiance and
                exquisite dishes."
              </p>
              <p className="text-gray-800 text-center font-semibold">
                Jane Smith
              </p>
              <p className="text-gray-600 text-center">
                Marketing Director, ABC Inc.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="mb-4">
                <img
                  src={imgx}
                  alt="Client 3"
                  className="w-18 h-[150px] rounded-full mx-auto"
                />
              </div>
              <p className="text-gray-600 text-center mb-4">
                "Extraordinary dining experience - elegant ambiance and
                exquisite dishes."
              </p>
              <p className="text-gray-800 text-center font-semibold">
                Alice Johnson
              </p>
              <p className="text-gray-600 text-center">Founder, StartUp Co.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
