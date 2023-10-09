import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
