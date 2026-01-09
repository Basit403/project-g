import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <section style={{ padding: "100px 20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Blog Post {id}</h1>

      <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
        This is a dummy blog page.  
        So you go later fetch the real blog content
        using this ID from the database.
      </p>

      <p style={{ marginTop: "20px", color: "#555" }}>
        Blog ID from URL: <strong>{id}</strong>
      </p>
    </section>
  );
}
