import { useRef, useState } from 'react'

// import faecbookImg from "../../Assets/images/facebook.png";
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
  }

  // focus() 2 조건이 맞춰줬을 떄 버튼 백그라운드 변경
  const [color, setColor] = useState('')

  const changeColorHandler = () => {
    if (
      (state.identify.length >= 6 || !state.identify.includes('@')) &&
      state.password.length >= 6
    )
      setColor('#0074cc')
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
        ref={identifyInput}
      />
      <input
        name="password"
        type="password"
        className="input"
        placeholder="Password"
        value={state.password}
        onChange={changeStateHandler}
        ref={passwordInput}
      />
      <button
        style={{ backgroundColor: `${color}` }}
        className="button"
        onClick={() => {
          submitHandler()
          changeColorHandler()
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
