import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <section className="carousel-section">
        <h2>Galerie en vedette</h2>
        <Carousel />
      </section>
      <About />
      <Features />
    </div>
  );
};

export default Home;
