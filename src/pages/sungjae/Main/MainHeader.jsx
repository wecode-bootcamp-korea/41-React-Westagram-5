import { Link } from 'react-router-dom'

import instagramLogo from '../../../assets/images/sungjae/images/instagramlogo.png'
import instagramLogo2 from '../../../assets/images/sungjae/images/instagram2.png'
import exploreImg from '../../../assets/images/sungjae/images/explore.png'
import heartImg from '../../../assets/images/sungjae/images/heart.png'
import profileImg from '../../../assets/images/sungjae/images/profile.png'

const MainHeader = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">
          <img id="leftImg" src={instagramLogo2} alt="logo" />
        </Link>
        <div id="vertical_line"></div>
        <img src={instagramLogo} alt="logo" />
      </div>
      <div className="header-center">
        <input placeholder="검색" />
      </div>
      <div className="header-right">
        <img src={exploreImg} alt="logo" />
        <img src={heartImg} alt="logo" />
        <img src={profileImg} alt="logo" />
      </div>
    </div>
  )
}

export default MainHeader
