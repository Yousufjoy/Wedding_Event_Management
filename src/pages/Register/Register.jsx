import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div>
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
            <div className="p-4 py-6 text-white bg-[#C3937C] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
              <div className="my-3 text-4xl font-bold tracking-wider text-center">
                <a href="#">Wedding!</a>
              </div>
              <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                With the power of K-WD, you can now focus only on functionaries
                for your digital products, while leaving the UI design on us!
              </p>
              <p className="flex flex-col items-center justify-center mt-10 text-center">
                <span>Already have an account?</span>

                <Link
                  className=" text-blue-300 font-semibold text-1xl"
                  to="/login"
                >
                  Login here!
                </Link>
              </p>
            </div>
            <div className="p-5 bg-white md:flex-1">
              <h3 className="my-4 text-2xl font-semibold text-gray-700">
                Register!
              </h3>
              <form className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                  <label className="text-sm font-semibold text-gray-500">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>

                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-500"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    id="password"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#C3937C] rounded-md shadow hover:bg-[#EAD9C9] hover:text-white focus:outline-none focus:ring-blue-200 focus:ring-4"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;