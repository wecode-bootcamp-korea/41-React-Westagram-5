import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function LoginGalim() {
  const navigate = useNavigate();
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
  };

  const goToMain = () => {
    navigate('/main-galim');
  };

  const active = idValue.includes('@') && pwValue.length >= 5;
  let blocked;
  active ? (blocked = false) : (blocked = true);
  let color;
  active
    ? (color = { backgroundColor: '#0179f2' })
    : (color = { backgroundColor: '#b2dffc' });
  return (
    <div>
      <div className="login-wrap">
        <header className="login-logo">
          <h1>westagram</h1>
        </header>
        <form>
          <section className="login-container">
            <input
              className="login__id"
              id="user__id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={saveUserId}
              value={idValue}
            />
            <input
              className="login__pw"
              id="user__pw"
              type="password"
              placeholder="비밀번호"
              onChange={saveUserPw}
              value={pwValue}
            />
            <button
              id="login__btn"
              onClick={goToMain}
              type="submit"
              style={color}
              disabled={blocked}
            >
              로그인
            </button>
          </section>
        </form>
        <a href="https://www.instagram.com/accounts/password/reset/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}
