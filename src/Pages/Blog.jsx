import React, { useState } from 'react'
import { Link } from "react-router-dom";


const Blog = () => {

    const blogData = [
    {
      id: 1,
      title: "Gain a deeper understanding of global markets.",
      date: "29 January, 2025",
      author: "Mark J. Speight",
      image: "https://s3.mordorintelligence.com/home/industry_reports_logo.webp",
      link: "/blog/1",
      paragraph: "In each report we break down and analyze the market by segments, understand the prevailing dynamics and study the companies operating in these spaces, to finally arrive at solutions that help you have the competitive advantage."
    },
    {
      id: 2,
      title: "Gain a deeper understanding of global markets.",
      date: "15 February, 2025",
      author: "Lara M. Finch",
      image: "https://s3.mordorintelligence.com/home/industry_reports_logo.webp",
      link: "/blog/2",
      paragraph: "In each report we break down and analyze the market by segments, understand the prevailing dynamics and study the companies operating in these spaces, to finally arrive at solutions that help you have the competitive advantage."
    },
    {
      id: 3,
      title: "Gain a deeper understanding of global markets.",
      date: "03 March, 2025",
      author: "David K. Lyman",
     image: "https://s3.mordorintelligence.com/home/industry_reports_logo.webp",
      link: "/blog/3",
      paragraph: "In each report we break down and analyze the market by segments, understand the prevailing dynamics and study the companies operating in these spaces, to finally arrive at solutions that help you have the competitive advantage."
    },
    {
      id: 3,
      title: "Gain a deeper understanding of global markets.",
      date: "03 March, 2025",
      author: "David K. Lyman",
     image: "https://s3.mordorintelligence.com/home/industry_reports_logo.webp",
      link: "/blog/3",
      paragraph: "In each report we break down and analyze the market by segments, understand the prevailing dynamics and study the companies operating in these spaces, to finally arrive at solutions that help you have the competitive advantage."
    }
  ];

    const [expanded, setExpanded] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleText = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <section className="blog_section p-5 d-none">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="blog_section_heading">
                                <h5 className="section_heading p-0 text-start mx-0 mb-3">Chemicals & Materials Market Research Report</h5>
                                <p className={`paragraph ${expanded ? 'expanded' : 'collapsed'}`} m-0>
                                    The chemicals and materials sector is considered to be one of the largest industries worldwide. As per a 2019 report by the International Council of Chemical Associations, the industry was supporting around 120 million jobs and accounted for USD 5.7 trillion to the global GDP. The main aim of this sector is to distribute, produce, and create chemicals for consumers and manufacturers. Two clear sectors, namely, organic and inorganic chemicals, make up the entire industry. In the late 1700s, large-scale and widespread production of chemicals first started with alkaline salts of sodium, potassium, and alkalis. The industry underwent a revolution in 1872 with the emergence of a cost-effective and more efficient process of producing alkalis. Major American companies started creating synthetic rubber and other chemical products in the U.S. during World War I and II. This happened because of the shortage of natural rubber and chemicals produced in Germany. The U.S. chemical industry started working towards the development of more sustainable products in the 2000s to lower the impact on the environment. This resulted in the introduction of the green chemistry movement. The American Chemical Society declared green chemistry to be the usage, creation and designing of chemical processes and products that would help in eliminating or reducing the utilization of toxic chemicals. However, the COVID-19 pandemic has disrupted this industry. Hence, companies are shifting towards strategic initiatives in functional areas, such as technology and R&D activities. Business Research Insights connects over numerous markets & value chains under the chemicals and materials sector to better understand the highly demanded insights, along with forecasts of niche markets & market sizing. We persist in delivering precise reports to our clients to support them in growing their businesses.
                                </p>
                                <button className="btn btn-link p-0" onClick={toggleText}>
                                    {expanded ? 'Show Less' : 'Show More'}
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="blog_image_section">
                                <img src="https://www.businessresearchinsights.com/assets/icons/chemical-material.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_tabs_section py-5">
                <div className="container">
                    <div className="row">
                        {blogData.map((blog) => (
                            <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                                <div className="blog_card_item" key={blog.id}>
                                    <Link to={blog.link}>
                                        <img src={blog.image} alt={blog.title} />
                                    </Link>
                                    <div className="blog-contain">
                                        <div className="blog-label">
                                            <span className="time">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                                <span>{blog.date}</span>
                                            </span>
                                            <span className="super">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                <span>{blog.author}</span>
                                            </span>
                                        </div>
                                        <Link to={blog.link}>
                                            <h3>{blog.title}</h3>
                                        </Link>
                                           
                                        <p className={`blog-paragraph ${isExpanded ? "expanded" : "clamped"}`}>
                                        {blog.paragraph}
                                        </p>

                                        <span
                                        className="toggle-link"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        >
                                        {isExpanded ? "Show less" : "Show more"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog