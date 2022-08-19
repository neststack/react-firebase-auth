import React, { useState, useContext } from 'react';
import InputControl from '../InputControl/InputControl';
import AuthContext from '../../store/auth-context';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { ImSpinner8 } from 'react-icons/im';

const Login = () => {
  const userAuthCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    pass: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!values.email || !values.pass) {
      setErrorMsg('Please fill all the fields');
      return;
    }
    setErrorMsg('');
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then((res) => {
        userAuthCtx.signin({
          name: res.user.displayName,
          email: res.user.email,
        });
        setSubmitButtonDisabled(false);
        navigate('/');
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">
          Login
          <span>
            {submitButtonDisabled && <ImSpinner8 className="loadingSpinner" />}
          </span>
        </h1>

        <form onSubmit={submitHandler}>
          <InputControl
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            label="Email"
            type="email"
            placeholder="Enter email"
          />
          <InputControl
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            label="Password"
            type="text"
            placeholder="Enter password"
          />

          <div className="footer">
            <b className="error">{errorMsg}</b>
            <button
              type="submit"
              disabled={submitButtonDisabled}
              
            >
              Login
            </button>
            <p>
              Don't have an account?{' '}
              <span>
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
