import { useRef, useState } from 'react'
import faecbookImg from '../../assets/images/sungjae/images/facebook.png'

const LoginForm = () => {
  //로그인 input 함수 정리 {useState / useStateHandler }
  const [state, setState] = useState({
    identify: '',
    password: '',
  })

  const changeStateHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  //로그인 button 함수 정리 { useRef+focus() }
  const identifyInput = useRef()
  const passwordInput = useRef()

  const submitHandler = () => {
    if (state.identify.length < 5 || !state.identify.includes('@')) {
      identifyInput.current.focus()
      return
    }
    if (state.password.length < 5) {
      passwordInput.current.focus()
      return
    }

    alert('로그인 성공!')
    setState({
      identify: '',
      password: '',
    })
  }

  // button 클래스Name을 바꿔서 활성화 시키기
  const [isActive, setIsActive] = useState(false)

  const isInputValue =
    state.identify.length >= 6 &&
    state.identify.includes('@') &&
    state.password.length >= 5

  const isInputValueHandler = () => {
    return isInputValue ? setIsActive(true) : setIsActive(false)
  }

  return (
    <div className="form_wrap">
      <input
        name="identify"
        type="text"
        className="input"
        placeholder="Phone Number, username, or email"
        value={state.identify}
        onChange={changeStateHandler}
        onKeyUp={isInputValueHandler}
        ref={identifyInput}
      />
      <input
        name="password"
        type="password"
        className="input"
        placeholder="Password"
        value={state.password}
        onChange={changeStateHandler}
        onKeyUp={isInputValueHandler}
        ref={passwordInput}
      />
      <button
        className={isActive ? 'buttonActive' : 'button'}
        disabled={isInputValue ? false : false}
        onClick={() => {
          submitHandler()
        }}
      >
        Log in
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
  )
}

export default LoginForm
