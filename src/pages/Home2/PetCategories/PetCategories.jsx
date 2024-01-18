import { useLoaderData } from "react-router-dom";
import Container from "../../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Header from "../../../components/PetDetails/Header";
import Button from "../../../components/Button/Button";

const PetCategories = () => {
  const animals = useLoaderData();

  return (
    <Container>
      <Helmet>
        <title>{animals?.petName}</title>
      </Helmet>

        <div className="flex flex-col gap-6 mb-5">
          <Header animals={animals}></Header>
        </div>
        <Button label={"Adopted"}></Button>
    </Container>
  );
};

export default PetCategories;
