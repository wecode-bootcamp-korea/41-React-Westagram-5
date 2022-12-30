// Import React
import React from 'react'
// Component 가져오기
import LoginMain from './LoginMain'
// Img file 저장
import instaCellphone from '../../../assets/images/sungjae/images/instacellphone.png'
// css 가져오기
import './Login.scss'

const LoginSungjae = () => {
  return (
    <React.Fragment>
      <div className="login_container">
        <img src={instaCellphone} alt="instagram_cellphone" id="cellphone" />
        <LoginMain />
      </div>
    </React.Fragment>
  )
}

export default LoginSungjae
