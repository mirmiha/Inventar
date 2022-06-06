import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Redirect } from "react-router-dom";
import Home from "./Home";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const redirect = Redirect;
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        return <Redirect to="/app" />;
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthing(false);
    } else {
      setAuthing(true);
    }
  });

  return (
    <div>
      <p>Login Page</p>
      <button
        onClick={() => signInWithGoogle()}
        disabled={auth.currentUser !== null}
      >
        Sign In With Google
      </button>

      <button onClick={() => signOut(auth)} disabled={auth.currentUser == null}>
        Sign Out
      </button>
    </div>
  );
};
export default LoginPage;
