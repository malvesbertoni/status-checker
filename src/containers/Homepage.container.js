import Display from "../components/Display/Display";
import Header from "../components/Header/Header";
import "./Homepage.container.css";

const Homepage = () => {
  return (
    <section className="homepage">
      <Header />
      <Display />
    </section>
  );
};

export default Homepage;
