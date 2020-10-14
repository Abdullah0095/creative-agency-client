import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import './Login.css';
import { Link } from 'react-router-dom';
import googleImage from '../../images/google.png';
import logo from '../../images/logos/logo.png';


const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
     
    const handleGoogleSignIn = () => {


        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {

            const { displayName, email,  photoURL} = result.user;
            const signedInUser = { name: displayName, email, image: photoURL }
            setLoggedInUser(signedInUser);
            console.log(loggedInUser.image)
            // history.replace(from);

        });
    }

    return (
        <section>
            <div className="logo ">
                <Link to="/home"><img className="logo" src={logo} alt=""/></Link>
            </div>
            <div className='page-decoration'>
                <div style={{marginBottom: '40px'}}>
                    <h3>Login With</h3>
                </div>
                <div className='login-button'>
                    <button onClick={handleGoogleSignIn}>
                        
                        <h5><img src={googleImage} alt=""/>Continue with google</h5>
                        </button>
                </div>
            </div>
        </section>
        
        
    );
};

export default Login;