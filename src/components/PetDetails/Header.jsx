/* eslint-disable react/prop-types */

import Heading from "../Shared/Heading";

const Header = ({ animals }) => {
  return (
    <>
      <Heading title={animals.petName} subtitle={animals.location} />
      <div className="w-full md:h-[100vh] overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src={animals.petPicture}
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;
