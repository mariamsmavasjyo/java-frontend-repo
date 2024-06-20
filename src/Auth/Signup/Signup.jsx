// import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock ,FaEnvelope} from 'react-icons/fa'; // Importing Font Awesome icons

function ALoginForm() {
    return (
        <div className="per">
            <div className="iner">
                <div className="col-left">
                    <div className="login-text">
                        <br/>
                        <br/>
                        <br/>
                        <div className='ssop'>
                        <img src="https://cdn.pixabay.com/photo/2017/01/10/03/54/avatar-1968236_640.png" alt="Logo" /> {/* Insert your image here */}
                        </div>
                        <h2>Welcome Back</h2>
                        <p>Signup to a account.<br/> <br/>It's totally free.</p>
                        <p>Signup</p>
                    </div>
                </div>
                <div className="col-right">
                    <div className="login-form">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h2>Signup</h2>
                        <form>
                            <p>
                                <label><FaUser /><span>*</span></label>
                                <input type="text" placeholder="Enter the FirstName" required />
                            </p>
                            <p>
                                <label><FaUser /><span>*</span></label>
                                <input type="text" placeholder="Enter the LastName" required />
                            </p>
                            <p>
                                <label><FaEnvelope /><span>*</span></label>
                                <input type="text" placeholder="Enter the Email" required />
                            </p>
                            <p>
                                <label><FaLock /><span>*</span></label>
                                <input type="password" placeholder="Enter the Password" required />
                            </p>
                            <p>
                                <label><FaLock /><span>*</span></label>
                                <input type="password" placeholder="Enter the ConfirmPassword" required />
                            </p>
                            <p>
                                <Link to="/AViewheader">
                                    <input type="submit" value="Sign In" />
                                </Link>
                            </p>
                        </form>
                        <p>
                            Already have an account? <Link to="/Login">Login here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ALoginForm;
