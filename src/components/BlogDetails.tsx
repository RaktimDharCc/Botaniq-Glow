import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Blog } from "../types/Blogs";
import blogsData from "../data/blogs.json";

const ImageSource = "../src/assets/images";

function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
  const found = blogsData.find((b) => b.id === Number(id));
  setBlog(found || null);
}, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="blog-details-container">
      <div className="container">
        <div className="blog-details-content-container">
          <div className="blog-details-left-content">
             <h1>{blog.title}</h1>

            <div
              className="meow"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            <Link to="/products" className="common-btn">
              Check Our product Out{" "}
              <img src={`${ImageSource}/arrow.svg`} alt="" />
            </Link>
          </div>
          <div className="blog-details-right-content">
            <div className="sticky-image-container">
              <img
                src={blog.image}
                alt={blog.title}
                className="img-fluid my-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
