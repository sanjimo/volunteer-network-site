import React from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import {Link, useHistory, useLocation } from 'react-router-dom';
import { useState} from 'react';



const Register = () => {
    const {signInUsingGoogle, createUserWithEmailAndPassword, sendEmailVerification, updateProfile,auth} = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //location redirect
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";

    //set user name
    const handleNameChange = e => {
        setName(e.target.value);
    }

    //set user email
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    //set user password
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    //registration processing
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError("Password must contain at least 2 uppercase!");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
            setUserName();
            history.push(redirect_uri);
        })
        .catch(error => {
            setError(error.message);
        })

    }


    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    //email verification
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    //google login
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(()=>{
            history.push(redirect_uri);
        })
    }


    return (
        <div className='w-50 mx-auto m-5'>
            <Form onSubmit={handleRegistration}>
                <h3 className="text-secondary">Create an Account</h3>
                <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label text-secondary">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="text-secondary col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" placeholder="Your Email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label text-secondary">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" placeholder="Your Password" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-6 offset-sm-6 mx-auto m-0">
                        <div className="form-check m-0">
                            <p className="text-secondary">Already have an account?  <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger fs-6 mx-auto">{error}</div>
               <div>
                <button
                type="submit"
                className="btn btn-info ps-5 pe-5 text-white mb-1 mt-1"
                >Register</button>
               </div>
            </Form>
            <div>
               <button
               onClick={ handleGoogleLogin }
               className="m-1 btn btn-danger text-light  mx-auto"
               ><i className="fab fa-google text-light mb-2"></i> Google Sign-in</button>
            </div>
        </div>
    );
};

export default Register;