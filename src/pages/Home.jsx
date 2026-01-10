import Hero from "../components/Hero";
import BigImage from "../components/Bimage";
import FeaturedBlogs from "../components/Featuredblog";
import LatestBlogs from "../components/Latestblog";
import Testimonials from "../components/Testimonial";
import AboutMe from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BigImage />
      <FeaturedBlogs />
      <LatestBlogs />
      <Testimonials />
      <AboutMe />
      <Footer />
    </>
  );
}
