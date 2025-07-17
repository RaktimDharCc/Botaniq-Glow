import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Blogs, Blog } from "../types/Blogs";
import "../assets/css/bloglist.css";

function BlogList() {
  const [blogs, setBlogs] = useState<Blogs>([]);

useEffect(() => {
  fetch("/data/blogs.json")
    .then((res) => res.json())
    .then((data: Blog[]) => {
      setBlogs(data);
    })
    .catch((err) => {
      console.error("Failed to fetch blogs:", err);
      setBlogs([]);
    });
}, []);


  return (
    <section className="blog-list-sec">
      <div className="container">
        <h3 className="sec-hdng">Blog</h3>
        <div className="row">
          {blogs.map((blog: Blog) => (
            <div key={blog.id} className="col-md-6">
              <div className="blog-card">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-card-img-top img-fluid"
                />
                <div className="blog-card-body">
                  <h5>{blog.title}</h5>
                  <p>{blog.excerpt}</p>
                  <Link to={`/blogs/${blog.id}`} className="common-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
