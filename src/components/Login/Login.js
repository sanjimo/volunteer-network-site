import React from 'react';
import { Form } from 'react-bootstrap';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useState} from 'react';


const Login = () => {
    const {signInUsingGoogle, signInWithEmailAndPassword, auth} = useAuth();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    //location redirect
    const location =useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(()=>{
            history.push(redirect_uri);
        })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    //set user password
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    //login processing
    const processLogin = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError("Password must contain at least 2 uppercase!");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="w-50 mx-auto m-5">
            <Form onSubmit={processLogin}>
                <h3 className="text-secondary">Login</h3>
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
                            <p className="text-secondary">New to Volunteer Network?  <Link to="/register">Create an account</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger fs-6 text-center">{error}</div>
               <div>
                <button
                type="submit"
                className="btn btn-info ps-5 pe-5 text-white mb-1 mt-1"
                >Login</button>
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
}

export default Login;