import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Redirect } from "react-router-dom";

export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const redirect = Redirect;
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
    setLoading(false);
  });

  if (loading) return <p>nalagam..</p>;

  if (!authenticated) return <Redirect to="/login" />;

  return <>{children}</>;

  return <div></div>;
};

export default AuthRoute;
