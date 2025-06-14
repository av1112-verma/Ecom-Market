import React from 'react'
import { Link } from 'react-router-dom';
function Request_Details() {
    return (
        <section className='ad_request-details'>
            <div className="container my-4">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex page_breadcrumbs">
                            <Link to="/" className="">
                                Home /
                            </Link>
                            <Link to="/press_release" className="">
                                Automobile & Transportation /
                            </Link>
                            <p className='breadcrumb_data'>Autonomous Vehicles Market</p>
                        </div>
                    </div>

                    <div className="co-12 mt-5">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="compost-card text-white mb-4">
                                    <h3 className="fw-bold">Compost Market</h3>
                                    <p className="mb-4">
                                        Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Waste Compost, Manure-based Compost, Leaf-based Compost, Others), By Application (Agriculture, Landscaping & Horticulture, Residential Use, Turf & Sports Grounds, Others), By Form (Bulk Compost, Packaged Compost), By End-Use Industry (Agricultural, Residential, Commercial, Institutional), Regional Analysis and Forecast 2033.
                                    </p>
                                    <div className="badge-box px-4 py-2 rounded-pill text-white fw-semibold">
                                        Agriculture | 10 January 2025 | Report ID: EMR001197 | Pages: 260
                                    </div>
                                </div>
                                <div className="request-form-box mb-4 pt-0">
                                    <h4 className='ad_main_head text-center'>Request For Sample Report</h4>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Business Email"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <select className="form-select">
                                                    <option>Country Code</option>
                                                    <option value="+91">+91</option>
                                                    <option value="+1">+1</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Company Name.."
                                                />
                                            </div>
                                            <div className="col-12">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Message"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                            <div className="col-12 mt-3">
                                                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input me-2"
                                                            id="privacyCheck"
                                                            defaultChecked
                                                        />
                                                        <label className="form-check-label" htmlFor="privacyCheck">
                                                            Yes, I have read the <a href="#" className='animated-underline'>privacy policy</a>
                                                        </label>
                                                    </div>
                                                    <button type='submit' className="animated-btn">
                                                        Send Request
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="request-form-box mb-4 pt-0">
                                    <h5 className=" ad_main_head">Choose a Licence Type</h5>
                                    <form>
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="license"
                                                id="single"
                                                defaultChecked
                                            />
                                            <label className="form-check-label" htmlFor="single">
                                                Single User License <strong>$4850</strong>
                                            </label>
                                        </div>
                                        <hr />
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="license"
                                                id="multi"
                                            />
                                            <label className="form-check-label" htmlFor="multi">
                                                Multiple User License <strong>$5850</strong>
                                            </label>
                                        </div>
                                        <hr />
                                        <div className="form-check mb-4">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="license"
                                                id="corporate"
                                            />
                                            <label className="form-check-label" htmlFor="corporate">
                                                Corporate User License <strong>$7850</strong>
                                            </label>
                                        </div>
                                        <hr />
                                        <button type="submit" className="animated-btn">
                                            BUY NOW <span>&rarr;</span>
                                        </button>
                                    </form>
                                </div>
                                <div className='request_ul_ad mb-4'>
                                    <div className="bg-primary text-white px-3 py-2">
                                        <h5 className='ad_main_head my-2 text-white'>Related Reports</h5>

                                    </div>
                                    <ul className="list-group related-report-list">
                                        <li className="related-report-item">
                                            <p>Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...</p>
                                        </li>
                                        <li className="related-report-item">
                                            <p>Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...</p>
                                        </li>
                                        <li className="related-report-item">
                                            <p>Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...</p>
                                        </li>
                                        <li className="related-report-item">
                                            <p>Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...</p>
                                        </li>
                                        <li className="related-report-item">
                                            <p>Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...Compost Market Size, Share, Trends, Growth, and Industry Analysis, By Type (Green Compost, Food Wast...</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Request_Details