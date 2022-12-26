import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const navigate = useNavigate();

  //이메일 값 가져오기
  const emailInputValue = e => {
    setEmail(e.target.value);
  };

  //패스워드 값 가져오기
  const passWordInputValue = e => {
    setPassword(e.target.value);
  };

  //조건이 맞는지 확인하기 (isabled로 버튼에 넣어주기)
  const active = email.includes('@') && password.length > 5;

  //disabled 조건 생성하기 (클래스네임 변경 변수 버튼에 넣어주기)
  const name = active ? 'active' : '';

  //메인페이지로 이동
  const goToMain = () => {
    active
      ? navigate('/main-jinkyung')
      : alert('아이디 또는 비밀번호를 확인하세요');
  };

  return (
    <section>
      <form>
        <input
          id="id_input"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={emailInputValue}
          //값이 바뀌는거 (=조건이 성립하는지) 확인하기 위해 onChange사용
          value={email}
        />
        <input
          id="pw_input"
          type="password"
          placeholder="비밀번호"
          onChange={passWordInputValue}
          value={password}
        />
        <button
          id="login_btn"
          className={name}
          isabled={active}
          onClick={goToMain}
        >
          로그인
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
