import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const Home = () => {
  const userAuthCtx = useContext(AuthContext);

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">
          {userAuthCtx.name ? `Welcome - ${userAuthCtx.name}` : 'Please Login'}
        </h1>
        <div className="footer">
          {!userAuthCtx.name && (
            <>
              <Link className="link" to="/login">
                login
              </Link>
              <Link className="link" to="/signup">
                signup
              </Link>
            </>
          )}
          {userAuthCtx.name && (
            <button className="link" onClick={userAuthCtx.logout}>
              logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
