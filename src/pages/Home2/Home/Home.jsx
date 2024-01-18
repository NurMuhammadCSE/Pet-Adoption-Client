import Categories from "../../../components/Categories/Categories";
import Container from "../../../components/Shared/Container";
import AllPet from "../AllPet/AllPet";

const Home = () => {
  return (
  <div>
      <Container>
        <Categories></Categories>
        <AllPet></AllPet>
    </Container>
  </div>
  );
};

export default Home;
