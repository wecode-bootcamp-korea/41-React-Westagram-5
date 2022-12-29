import React from 'react';
import LoginForm from '../Login/LoginForm/LoginForm';
import './Login.scss';
import '../Login/LoginForm/LoginForm.scss';
import '../../../styles/common.scss';
import '../../../styles/variables.scss';

const Login = () => {
  return (
    <div id="main_box">
      <div id="title">westagram</div>
      <LoginForm />
      <div id="forgot">
        <a id="forgot_password">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
};

export default Login;
