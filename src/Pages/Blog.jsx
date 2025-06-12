import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  const [expandedIds, setExpandedIds] = useState(new Set());

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://test.pearl-developer.com/econ-market/api/blog");
        const data = await res.json();
        console.log("API Response:", data);
        // Use the `blogs` key from your response
        setBlogData(Array.isArray(data.blogs) ? data.blogs : []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="blog_tabs_section py-5">
      <div className="container">
        <div className="row">
          {blogData.length === 0 ? (
            <p>Loading blogs...</p>
          ) : (
            blogData.map((blog) => {
              const isExpanded = expandedIds.has(blog.id);
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={blog.id}>
                  <div className="blog_card_item">
                    <Link to={`/blog/${blog.slug}`}>
                      <img src={blog.image} alt={blog.name} />
                    </Link>
                    <div className="blog-contain">
                      <div className="blog-label">
                        <span className="time">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-clock"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                        </span>
                        <span className="super">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <span>Admin</span> {/* You can replace if you have author info */}
                        </span>
                      </div>
                      <Link to={`/blog/${blog.slug}`}>
                        <h3>{blog.name}</h3>
                      </Link>

                      <p className={`blog-paragraph ${isExpanded ? "expanded" : "clamped"}`}>
                        {parse(blog.description)}
                      </p>

                      <span className="toggle-link" onClick={() => toggleExpand(blog.id)}>
                        {isExpanded ? "Show less" : "Show more"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
