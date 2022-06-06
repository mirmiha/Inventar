import React, {useState} from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {Redirect } from 'react-router-dom';
import Home from './Home';


export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const redirect = Redirect;
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
        .then(response => {
            console.log(response.user.uid);
            return <Redirect to ='/app'/>
        })
        .catch(error => {
            console.log(error);
            setAuthing(false);
        });
    }

    return (
        <div>
            <p>Login Page</p>
            <button onClick={()=> signInWithGoogle()} disabled ={authing}>Sign In With Google</button>
            
        </div>
    );
};
export default LoginPage;
