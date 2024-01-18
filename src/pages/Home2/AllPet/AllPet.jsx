import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllPets } from "../../../api/pet";
import Loader from "../../../components/Shared/Loader";
import Card from "../../../components/Pets/Card";
import Heading from "../../../components/Shared/Heading";

const AllPet = () => {
    const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  // Click on it to get its data
  const [params] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    setLoading(true);
    // fetch("Pets.json")
    getAllPets().then((data) => {
      if (category) {
        const filtered = data.filter((pet) => pet.category === category);
        setPets(filtered);
      } else {
        setPets(data);
      }
      setLoading(false);
    });
  }, [category]);

  if (loading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }
    return (
        <>
        {pets && pets.length > 0 ? (
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-10 pt-12">
            {pets.map((pet) => (
              <Card key={pet._id} pet={pet}></Card>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
            <Heading
              center={true}
              title={"No pets Available in this Category"}
              subtitle={"Please Select Other Categories"}
            ></Heading>
          </div>
        )}
      </>
    );
};

export default AllPet;