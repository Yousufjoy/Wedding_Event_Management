import { Link } from "react-router-dom";

import { AiFillGoogleCircle } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
  const [successLogin, setSuccessLogin] = useState("");
  const [unSuccessFullLogin, setUnSuccessFullLogin] = useState("");
  const AuthInfo = useContext(AuthContext);
  const { loginUser } = AuthInfo;
  const auth = getAuth(app);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccessLogin("");
    setUnSuccessFullLogin("");
    loginUser(email, password)
      .then((result) => {
        // setSuccessLogin("Successfully Logged In!");
        console.log(result);

        Swal.fire("Logged in successfully!");
      })
      .catch((error) => {
        setUnSuccessFullLogin(error.message);
      });
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex items-center  min-h-screen p-4 bg-gray-100 lg:justify-center">
        <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-[#C3937C] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="#">BlissfulEvents</a>
            </div>
            <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
              Welcome to our wedding event management website, where dreams
              become reality. Crafting unforgettable weddings, your way,
              creating dream weddings, tailored to you.
            </p>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Do not have an account?</span>

              <Link
                className=" text-blue-300 font-semibold text-1xl"
                to="/register"
              >
                Register here!
              </Link>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            <form onSubmit={handleLogin} className="flex flex-col space-y-5">
              <div className="flex flex-col space-y-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <input
                  name="email"
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
                  name="password"
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
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">
                    or login with
                  </span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                  >
                    <span>
                      <AiFillGoogleCircle className=" text-blue-400 text-xl"></AiFillGoogleCircle>
                    </span>
                    <span
                      onClick={loginWithGoogle}
                      className="text-sm font-medium text-gray-800 group-hover:text-white"
                    >
                      Google
                    </span>
                  </a>
                </div>
              </div>
            </form>
            <div className=" text-white bg-green-500">{successLogin}</div>
            <div className=" text-white bg-red-500">{unSuccessFullLogin}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
