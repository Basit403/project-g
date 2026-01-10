import { Link } from "react-router-dom";
import "./Featuredblog.css";

export default function FeaturedBlogs() {
  return (
    <section className="featured-section">
      <h2 className="featured-title">My Featured Blogs</h2>

      <div className="featured-grid">
        <div className="blog-card">
          <img src="/images/blog.png" alt="Blog 1" />
          <h3>Minimal Lifestyle Tips</h3>
          <p>
            Discover simple ways to improve your lifestyle with less stress.
          </p>
          <Link to="/blog/1" className="read-moree">
            Read More →
          </Link>
        </div>

        <div className="blog-card">
          <img src="/images/blog.png" alt="Blog 2" />
          <h3>Daily Habits That Matter</h3>
          <p>
            Small habits that make a big difference in your daily routine.
          </p>
          <Link to="/blog/2" className="read-moree">
            Read More →
          </Link>
        </div>

        <div className="blog-card">
          <img src="/images/blog.png" alt="Blog 3" />
          <h3>Finding Work-Life Balance</h3>
          <p>
            Learn how to balance work and personal life effectively.
          </p>
          <Link to="/blog/3" className="read-moree">
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
}
