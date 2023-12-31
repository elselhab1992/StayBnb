import {
  Exclusive,
  Footer,
  Hero,
  Sharing,
  SocialMedia,
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
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Home;
