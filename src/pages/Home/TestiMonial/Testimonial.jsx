import imgx from "../../../assets/img1.jpg";
import imgx2 from "../../../assets/img2.png";
import imgx3 from "../../../assets/img3.png";

const Testimonial = () => {
  return (
    <div className=" my-6" id="testimonial " data-aos="zoom-in-right">
      <h1 className="text-[#787878]  text-3xl text-center py-10 uppercase tracking-widest leading-tight">
        Testimonials
      </h1>
      <div className="bg-gray-100 py-12">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - Wedding Planner */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="mb-4">
                <img
                  src={imgx}
                  alt="Client 1"
                  className="w-18 h-[150px] rounded-full mx-auto"
                />
              </div>
              <p className="text-gray-600 text-center mb-4">
                "Our wedding planner made our special day truly magical. Every
                detail was perfect!"
              </p>
              <p className="text-gray-800 text-center font-semibold">"John"</p>
            </div>

            {/* Testimonial 2 - Venue Coordinator */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="mb-4">
                <img
                  src={imgx2}
                  alt="Client 2"
                  className="w-18 h-[150px] rounded-full mx-auto"
                />
              </div>
              <p className="text-gray-600 text-center mb-4">
                "The venue coordinator was exceptional, ensuring our wedding was
                flawless."
              </p>
              <p className="text-gray-800 text-center font-semibold">"James"</p>
            </div>

            {/* Testimonial 3 - Catering Service */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="mb-4">
                <img
                  src={imgx3}
                  alt="Client 3"
                  className="w-18 h-[150px] rounded-full mx-auto"
                />
              </div>
              <p className="text-gray-600 text-center mb-4">
                "The catering service exceeded our expectations. Our guests
                couldn't stop raving about the food."
              </p>
              <p className="text-gray-800 text-center font-semibold">
                "Michael"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
