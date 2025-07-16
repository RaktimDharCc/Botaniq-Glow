import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogsData from "../data/blogs.json";
const ImageSource = "../src/assets/images";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // ✅ Replacing fetch with static import
    const found = blogsData.find((b) => b.id === Number(id));
    setBlog(found || null);
  }, [id]);

  if (!blog) return _jsx("p", { children: "Loading..." });

  return _jsx("div", {
    className: "blog-details-container",
    children: _jsx("div", {
      className: "container",
      children: _jsxs("div", {
        className: "blog-details-content-container",
        children: [
          _jsxs("div", {
            className: "blog-details-left-content",
            children: [
              _jsx("h1", { children: blog.title }),
              _jsx("div", {
                className: "meow",
                dangerouslySetInnerHTML: { __html: blog.content },
              }),
              _jsxs(Link, {
                to: "/products",
                className: "common-btn",
                children: [
                  "Check Our product Out ",
                  _jsx("img", {
                    src: `${ImageSource}/arrow.svg`,
                    alt: "",
                  }),
                ],
              }),
            ],
          }),
          _jsx("div", {
            className: "blog-details-right-content",
            children: _jsx("div", {
              className: "sticky-image-container",
              children: _jsx("img", {
                src: blog.image,
                alt: blog.title,
                className: "img-fluid my-3",
              }),
            }),
          }),
        ],
      }),
    }),
  });
}

export default BlogDetails;
