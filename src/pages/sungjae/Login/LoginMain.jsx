// useNavigate
import { useNavigate } from 'react-router-dom'
// Compo 경로 수정
import LoginForm from '../../../components/LoginComponents/LoginForm'
import LoginSignup from '../../../components/LoginComponents/LoginSingup'
import LoginAdvertisemnet from '../../../components/LoginComponents/LoginAdvertisement'
// Img 가져오기
import instagramLogo from '../../../assets/images/sungjae/images/instagramlogo.png'

const LoginMain = () => {
  const navigate = useNavigate()
  const goToMain = () => {
    navigate('/main-sungjae')
  }
  return (
    <>
      <div className="login_main">
        <div className="login_main_form">
          <div className="login_main_form_image">
            <img src={instagramLogo} alt="instagramlogo" onClick={goToMain} />
          </div>
          <LoginForm />
        </div>
        <LoginSignup />
        <LoginAdvertisemnet />
      </div>
    </>
  )
}

export default LoginMain
