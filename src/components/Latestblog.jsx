import { Link } from "react-router-dom";
import "./Latestblog.css";

const dummyBlogs = [
  { id: 1, title: "Morning Habits", image: "/images/blog.png" },
  { id: 2, title: "Minimal Living", image: "/images/blog.png" },
  { id: 3, title: "Healthy Food", image: "/images/blog.png" },
  { id: 4, title: "Work Life Balance", image: "/images/blog.png" },
  { id: 5, title: "Travel Light", image: "/images/blog.png" },
  { id: 6, title: "Daily Routines", image: "/images/blog.png" },
];

function LatestBlogs() {
  return (
    <section id="latest-blogs" className="latest-section">
      <h2 className="latest-title">Latest Blogs</h2>

      <div className="latest-grid">
        {dummyBlogs.map(blog => (
          <div className="latest-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />

            <div className="latest-content">
              <h3>{blog.title}</h3>
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestBlogs;
