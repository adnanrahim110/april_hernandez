import { Helmet } from "react-helmet-async";
import { home_1_1 } from "../assets";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Contact from "../components/layouts/Contact";
import Hero from "../components/layouts/Hero";
import Posts from "../components/layouts/Posts";
import Reviews from "../components/layouts/Reviews";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - April P. Hernandez</title>
      </Helmet>
      <Hero
        title="Welcome to the Place Where You Pause, Heal, and Come Home"
        text="Reconnect with your truest self. Part guided journey, part soul expression, it walks with you through love, loss, and the powerful act of choosing yourself again and again."
        btn="buy now"
        btnLink="/"
        imgRight={home_1_1}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Reviews
        title="Real People. Real Results"
        text="More than 250 five-star reviews on Google"
      />
      <Posts />
      <Contact />
    </>
  );
};

export default Home;
