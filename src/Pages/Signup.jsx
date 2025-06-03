import React from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <section className=''>
                <div class="text-center p-5 light-bg">
                    <div class="contact_content_section">
                        <p class="text-center">Sign Up</p>
                        <h1 class="p-heading text-center">Fill out the form to be Sign up a Profile  of the Ecom team.</h1>
                    </div>
                </div>
            </section>
            <section className="login_form">
                <div class="contact-area style-two inner">
                    <div class="container">
                        <div class="row add-backgroun">
                            <div class="col-lg-8 m-auto">
                                <form action="#" method="POST" id="dreamit-form">
                                    <div class="single-contact-form">
                                        <div class="contact-content">
                                            <h4>Signup</h4>
                                        </div>
                                        <div class="single-input-box">
                                            <input type="text" name="email" placeholder="Enter Your email" required="" />
                                        </div>
                                        <div class="single-input-box">
                                            <input type="text" name="phone" placeholder="Enter Your Phone Number" required="" />
                                        </div>
                                        <div class="single-input-box">
                                            <input type="text" name="address" placeholder="Enter Your Address" required="" />
                                        </div>
                                        <div className="single-input-box position-relative" style={{ position: "relative" }}>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="********"
                                                required
                                            />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <label>
                                                <input type="checkbox" defaultChecked name="remember" /> Remember me
                                            </label>
                                            <span className="psw">
                                               {" "}
                                                <Link to="/forgot-password"
                                                    style={{ color: "#ff6600",textDecoration:"none" }}
                                                >
                                                     Forgot password?
                                                </Link>
                                            </span>
                                        </div>
                                        <div className="single-input-box">
                                            <button type="submit">Signup</button>
                                        </div>
                                        <span className='psw text-white'>Already have an Account <Link to="/login"  style={{ color: "#ff6600",textDecoration:"none" }}>Login</Link></span>
                                    </div>
                                </form>
                                <div id="status"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp