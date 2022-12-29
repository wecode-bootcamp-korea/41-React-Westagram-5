import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../SignUp/SignUpForm.scss';

function SignForm() {
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
  const active = email.length && password.length >= 6;

  const emailCheck = email.length < 6;
  const passwordCheck = password.length < 6;

  //disabled 조건 생성하기 (클래스네임 변경 변수 버튼에 넣어주기)
  const name = active ? 'active' : '';
  const emailName = emailCheck ? ' view' : '';
  const passwordName = passwordCheck ? ' view' : '';

  const signUp = e => {
    e.preventDefault();
    fetch('http://10.58.52.203:3000/auth/signup', {
      //서버 주소 입력
      method: 'POST', //GET은 기본사항
      headers: {
        'Content-Type': 'application/json;charset=utf-8', //POST면 필수적으로 넣어줘야 함
      },
      //JSON 파일로 변경
      body: JSON.stringify({
        // id: email,
        // pw: password,
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(signUp => console.log(signUp));
    // .then(data => console.log(data));

    // 메인페이지로 이동

    active
      ? navigate('/login-jinkyung')
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
        <div className={'check' + emailName}>
          아이디를 6글자 이상 입력해주세요
        </div>
        <input
          id="pw_input"
          type="password"
          placeholder="비밀번호"
          onChange={passWordInputValue}
          value={password}
        />
        <div className={'check' + passwordName}>
          비밀번호를 6글자 이상 입력해주세요
        </div>

        <button
          id="login_btn"
          className={name}
          isabled={active}
          // onClick={goToLogin}
          onClick={signUp}
        >
          회원가입하기
        </button>
      </form>
    </section>
  );
}

export default SignForm;
