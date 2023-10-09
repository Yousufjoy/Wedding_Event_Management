import { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json").then((res) => {
      res.json().then((data) => {
        setServices(data);
      });
    });
  }, []);

  return (
    <div className="  mt-[120px] lg:pl-[50px] max-w-[1600px] lg:ml-[150px] ">
      <h1 className="text-[#787878]  text-3xl text-center py-10 uppercase tracking-widest leading-tight">
        Our services
      </h1>
      {/* <h1 className="text-[#787878] font-normal uppercase tracking-widest leading-tight lg:text-6xl">
        Creating the <br /> Best Day Ever
      </h1> */}
      <div className="grid lg:grid-cols-3 grid-cols-1 pl-[15px] lg:px-[50px] gap-6">
        {services.map((service) => {
          return (
            <SingleService key={service.id} service={service}></SingleService>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
