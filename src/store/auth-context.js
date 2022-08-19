import { useState, createContext } from 'react';

const AuthContext = createContext({
  name: null,
  email: null,
  signin: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [userAuth, setUserAuth] = useState({
    name: null,
    email: null,
  });

  const userSigninHandler = (userDetails) => {
    setUserAuth({
      name: userDetails.name,
      email: userDetails.email,
    });
  };

  const userLogoutHandler = () => {
    setUserAuth({
      name: '',
      email: '',
    });
  };

  const context = {
    name: userAuth.name,
    email: userAuth.email,
    signin: userSigninHandler,
    logout: userLogoutHandler,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;