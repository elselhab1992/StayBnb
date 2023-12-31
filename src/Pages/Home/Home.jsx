import {
  Exclusive,
  Hero,
  Sharing,
  Traveller,
  Trending,
} from "../../components";
import About from "../../components/About/About";

const Home = () => {
  return (
    <>
      <Hero />
      <Exclusive />
      <Trending />
      <Sharing />
      <Traveller />
      <About />
    </>
  );
};

export default Home;
