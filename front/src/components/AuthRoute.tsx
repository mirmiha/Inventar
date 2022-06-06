import React, {useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Redirect } from 'react-router-dom';

export interface IAuthRouteProps{};

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props =>{
    const { children } = props;
    const auth = getAuth();
    const redirect = Redirect;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user){
            setLoading(false);
        }else {
            console.log("nepooblascen vstop");
            return <Redirect to ='/login'/>
            

        }
    });

    if(loading) return <p>nalagam..</p>;

    return <>{children}</>
    
    return <div></div>
};

export default AuthRoute;