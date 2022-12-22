import { useNavigate } from 'react-router-dom';

// import faecbookImg from "../../Assets/images/facebook.png";
import faecbookImg from '../../assets/images/sungjae/images/facebook.png';

const LoginForm = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('./main');
  };

  return (
    <div className="form_wrap">
      <input
        className="input"
        placeholder="Phone Number, username, or email"
        type="text"
      />
      <input className="input" placeholder="Password" type="password" />
      <button className="button" onClick={goToMain}>
        Log in{' '}
      </button>

      <div className="lineWrap">
        <div className="line"></div>
        <span className="lineLetter">OR</span>
        <div className="line"></div>
      </div>
      <div className="form_wrap_letter">
        <div className="form_wrap_another_root">
          <img src={faecbookImg} />
          <p>Log in with facebook</p>
        </div>
        <p> Forgot password?</p>
      </div>
    </div>
  );
};

export default LoginForm;
