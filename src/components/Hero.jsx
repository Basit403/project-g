import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">WELCOME TO</p>

        <h1 className="hero-title">
          A Lifestyle Blog <br /> for Creators
        </h1>

        <p className="hero-text">
          Inspiration, stories, and ideas to help you grow creatively and professionally.
        </p>

        <Link to="/" className="hero-btn">
          Get Inspired
        </Link>
      </div>
    </section>
  );
};

export default Hero;
