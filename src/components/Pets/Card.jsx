/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ pet }) => {
  const { petName, petPicture, age, location } = pet;
  return (
    <Link to={`/pet/${pet?._id}`} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
            src={petPicture}
            alt="Room"
          />
        </div>
        <div className="font-semibold text-lg">{petName}</div>
        <div className="font-semibold flex">
          {" "}
          Location:  {location}
        </div>
        <div className="font-light">Age: {age}</div>
      </div>
    </Link>
  );
};

export default Card;
