import React, { useState ,useEffect } from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {

    const [formData, setFormData] = useState({
        email: '',
        mobile_no: '',
        address: '',
        password: '',
        name: ""
    });

    
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    useEffect(() => {
    if (message) {
        const timer = setTimeout(() => {
            setMessage('');
        }, 5000); 

        return () => clearTimeout(timer); 
    }
}, [message]);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
        const response = await fetch('https://test.pearl-developer.com/econ-market/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        console.log("API Response:", data);

        if (data.errors) {
            const messages = Object.values(data.errors).flat().join(' ');
            setMessage(messages);
        } else {
            setMessage(data.message || 'Signup successful.');

            //  Reset the form 
            setFormData({
                email: '',
                mobile_no: '',
                address: '',
                password: '',
                name: ''
            });
        }
    } catch (error) {
        console.error("Signup Error:", error.message);
        setMessage(error.message || "Signup failed.");
    }

    setLoading(false);
};

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
                                <form onSubmit={handleSubmit}>
                                    <div className="single-contact-form">
                                        <div className="contact-content">
                                            <h4>Signup</h4>
                                        </div>
                                        <div className="single-input-box">
                                            <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange} required />
                                        </div>
                                        <div className="single-input-box">
                                            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                        <div className="single-input-box">
                                            <input type="text" name="mobile_no" placeholder="Enter Your Phone Number" value={formData.mobile_no} onChange={handleChange} required />
                                        </div>
                                        <div className="single-input-box">
                                            <input type="text" name="address" placeholder="Enter Your Address" value={formData.address} onChange={handleChange} required />
                                        </div>
                                        <div className="single-input-box position-relative">
                                            <input type="password" name="password" placeholder="********" value={formData.password} onChange={handleChange} required />
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between">
                                            <label>
                                                <input type="checkbox" defaultChecked name="remember" /> Remember me
                                            </label>
                                            <span className="psw">
                                                <Link to="/forgot-password" style={{ color: "#ff6600", textDecoration: "none" }}>
                                                    Forgot password?
                                                </Link>
                                            </span>
                                        </div>

                                        <div className="single-input-box">
                                            <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Signup'}</button>
                                        </div>

                                        <span className="psw text-white">
                                            Already have an Account? <Link to="/login" style={{ color: "#ff6600", textDecoration: "none" }}>Login</Link>
                                        </span>

                                        {message && (
                                            <div class="alert alert-success" role="alert">
                                               {message}
                                            </div>
                                        )}
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