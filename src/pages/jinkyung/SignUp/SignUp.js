import React from 'react';
import '../SignUp/SignUp.scss';
import '../../../styles/common.scss';
import '../../../styles/variables.scss';
import SignForm from './SignUpForm';

const Login = () => {
  return (
    <div id="main_box">
      <div id="title">SignUp</div>
      <SignForm />
    </div>
  );
};

export default Login;
