import React from "react";

function BlogDetails(props) {
  return (
    <section className="details-section blog-section">
      <p className="section-number">02</p>
      <h2>Blog Details</h2>
      <div className="title-line"></div>

      {props.showBlogs &&
        props.blogs.map((blog) => (
          <article className="detail-item" key={blog.id}>
            <h3>{blog.title}</h3>

            <p className="author">
              By {blog.author}
            </p>

            <p className="description">
              {blog.description}
            </p>
          </article>
        ))}

      {!props.showBlogs && (
        <p>Blog details are hidden</p>
      )}
    </section>
  );
}

export default BlogDetails;