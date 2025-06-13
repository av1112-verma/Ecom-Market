import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
// import Breadcrumbs from '../Component/Breadcrumbs';

const BlogDetails =  ()  => {
  const { slug } = useParams(); 
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

//   const BreadcrumbData = [
//     { label: 'Home', link: '/' },
//     { label: 'Blog', link: '/blog' },
//     { label: name, link: `/blog-detail/${slug}`, className: 'details-page-name' }
//   ];
  useEffect(() => {
    const fetchPressDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://test.pearl-developer.com/econ-market/api/blog-detail/${slug}`);
        const data = await response.json();

        // Check if 'blog' exists in response
        setBlogData(data.blog || null);
      } catch (error) {
        console.error('Error fetching press release details:', error);
        setBlogData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPressDetails();
  }, [slug]);

 if (loading) return (
  <div className="d-flex justify-content-center align-items-center" style={{height: '300px'}}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);
  if (!blogData) return <p>Blog Detail not found.</p>;

  const { name, description, created_at, image } = blogData;

  return (
    <section className="press_details">
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex page_breadcrumbs">
                <Link to="/" className="">
                    Home /
                </Link>
              <Link to="/blog" className="">
                Blog /
              </Link>
              <p className='breadcrumb_data'>{name}</p>
            </div>
            {/* <Breadcrumbs breadcrumbs={BreadcrumbData}/> */}
          </div>

          <div className="col-md-12">
            <div className="title-bar">{name}</div>
          </div>

          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center flex-wrap my-3">
              <p className="text-muted m-0">
                Published On: <strong>{new Date(created_at).toLocaleDateString()}</strong>
              </p>
              <div className="d-flex gap-2">
                <button className="btn btn-green">Get Instant Access - Buy Now</button>
                <button className="btn btn-blue">Request Sample</button>
              </div>
            </div>
          </div>

          <div className="col-md-12 _details_row">
            <div className="row">
              <div className="col-md-8">
                <img src={image} alt={name} className="img-fluid mb-3" />
                <p>{parse(description)}</p>
              </div>

              <div className="col-md-4">
                <div className="sticky_ad">
                  <div className="highlight-box">
                    <h6><strong>📄 Need a Custom Report?</strong></h6>
                    <p>We can customize every report - free of charge...</p>
                    <button className="btn btn-info w-100">Customize Now</button>
                  </div>

                  <div className="highlight-box">
                    <h6><strong>💰 Limited Budget?</strong></h6>
                    <p>We help clients to procure the report at their budgeted price.</p>
                    <button className="btn btn-outline-primary w-100">Request Discount</button>
                  </div>

                  <div className="our_client_img">
                    <img
                      className="w-100"
                      alt="Client Logos"
                      src="https://s3.mordorintelligence.com/home/logos.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
