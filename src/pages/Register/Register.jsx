import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const [successReg, setSuccessReg] = useState("");
  const [errorReg, setErrorReg] = useState("");
  const AuthInfo = useContext(AuthContext);
  const { createUser } = AuthInfo;
  const nav = useNavigate();
  const handleRegistration = (e) => {
    const auth = getAuth();
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(name, email, password, photo);

    // Regular expressions for password validation
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    // Check if the password meets the criteria
    if (!uppercaseRegex.test(password) || !specialCharRegex.test(password)) {
      setErrorReg(
        "Password must contain at least one uppercase letter and one special character and should be atleast 6 letters."
      );
      return; // Don't proceed with registration if the password is invalid
    }

    setSuccessReg("");
    setErrorReg("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // setSuccessReg("Successfully Registered!");
        Swal.fire("Registeration Successful!");

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // Profile updated!
            // ...
            nav("/");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        setErrorReg(error.message);
      });
  };

  return (
    <div>
      <div>
        <div
          className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center"
          data-aos="zoom-out-right"
        >
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
              <form
                onSubmit={handleRegistration}
                className="flex flex-col space-y-5"
              >
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
                    name="email"
                    type="email"
                    id="email"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-500"
                  >
                    PHOTO URL
                  </label>
                  <input
                    name="photo"
                    type="text"
                    id="photo"
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
                    Register
                  </button>
                </div>
                {/* Error Or success chcekc */}

                <div className=" text-white bg-red-500"> {errorReg}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
