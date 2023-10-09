import { Link } from "react-router-dom";
import "./SignlePageService.css"; // Import your CSS file

const SingleService = ({ service }) => {
  const { id, name, description, image, price, short_description } = service;
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img className=" w-full h-[250px] " src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{price}</button>
            <Link to={`/details/${id}`}>
              <button className="btn btn-danger">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
