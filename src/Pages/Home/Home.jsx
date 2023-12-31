import {
  Exclusive,
  Hero,
  Sharing,
  Traveller,
  Trending,
} from "../../components";

const Home = () => {
  return (
    <>
      <Hero />
      <Exclusive />
      <Trending />
      <Sharing />
      <Traveller />
    </>
  );
};

export default Home;
