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
    <div>
      <h1 className=" text-3xl text-center"> Our service</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 px-[50px] gap-3">
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
