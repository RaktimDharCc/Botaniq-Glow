import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/bloglist.css";
function BlogList() {
    const [blogs, setBlogs] = useState([]);
useEffect(() => {
  fetch("/data/blogs.json")
    .then((res) => res.json())
    .then((data) => setBlogs(data))
    .catch((err) => {
      console.error("Failed to fetch blogs.json:", err);
    });
}, []);

    return (_jsx("section", { className: "blog-list-sec", children: _jsxs("div", { className: "container", children: [_jsx("h3", { className: "sec-hdng", children: "Blog" }), _jsx("div", { className: "row", children: blogs.map((blog) => (_jsx("div", { className: "col-md-6", children: _jsxs("div", { className: "blog-card", children: [_jsx("img", { src: blog.image, alt: blog.title, className: "blog-card-img-top img-fluid" }), _jsxs("div", { className: "blog-card-body", children: [_jsx("h5", { children: blog.title }), _jsx("p", { children: blog.excerpt }), _jsx(Link, { to: `/blogs/${blog.id}`, className: "common-btn", children: "Read More" })] })] }) }, blog.id))) })] }) }));
}
export default BlogList;
