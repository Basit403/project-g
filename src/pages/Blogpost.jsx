import { useParams, Link } from "react-router-dom";
import "./Blogpost.css";

function BlogPost() {
  const { id } = useParams(); // blog id from URL

  return (
    <section className="blogpost">
      <div className="blogpost-container">
        {/* BLOG IMAGE */}
        <img
          src="/images/blog.png"
          alt="Blog cover"
          className="blogpost-image"
        />

        {/* BLOG CONTENT */}
        <h1 className="blogpost-title">
          This Is a Dummy Blog Title (ID: {id})
        </h1>

        <p className="blogpost-date">September 12, 2025</p>

        <div className="blogpost-content">
          <p>
            This is a dummy blog post content. It is only for layout and
            design purposes. When the backend is connected, this content
            will come from the database.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius 
            ducimus dolor recusandae provident eligendi ipsum exercitationem, 
            fugiat sapiente error a debitis adipisci veniam vel ratione! Tenetur veritatis nisi aut explicabo.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius 
            ducimus dolor recusandae provident eligendi ipsum exercitationem, 
            fugiat sapiente error a debitis adipisci veniam vel ratione! Tenetur veritatis nisi aut explicabo.
          </p>
        </div>

        <Link to="/" className="back-link">
          ← Back to Home
        </Link>

      </div>
    </section>
  );
}

export default BlogPost;
