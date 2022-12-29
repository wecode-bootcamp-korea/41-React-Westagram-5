import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function LoginGalim() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const handleSaveUserId = event => {
    setIdValue(event.target.value);
  };

  const handleSaveUserPw = event => {
    setPwValue(event.target.value);
  };

  const handleToMain = e => {
    e.preventDefault();
    fetch('http://10.58.52.180:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(data => {
        window.localStorage.setItem('token', data.accessToken);
        alert('로그인 성공');

        // .then(data => console.log(data));
        navigate('/main-galim');
      });
  };

  const isActive = idValue.includes('@') && pwValue.length >= 5;

  return (
    <div>
      <div className="login-wrap">
        <header className="login-logo">
          <h1>westagram</h1>
        </header>
        <form>
          <section className="login-container">
            <input
              className="login-id"
              id="user-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleSaveUserId}
              value={idValue}
            />
            <input
              className="login-pw"
              id="user-pw"
              type="password"
              placeholder="비밀번호"
              onChange={handleSaveUserPw}
              value={pwValue}
            />
            <button
              id="login-btn"
              onClick={handleToMain}
              type="submit"
              style={{
                backgroundColor: `${isActive ? '#0179f2' : '#b2dffc'}`,
              }}
              disabled={!isActive}
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
