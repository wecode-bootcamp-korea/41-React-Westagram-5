import navImg from '../../assets/images/sungjae/images/nav1.png'
import jakeprofileImg from '../../assets/images/sungjae/images/jakeprf.png'

const MainArticleHeader = () => {
  return (
    <div className="main-article-header">
      <div className="main-article-header-left">
        <img id="Jake" src={jakeprofileImg} alt="jake" />
        <p>JakeSJK</p>
      </div>
      <img src={navImg} alt="nav" />
    </div>
  )
}

export default MainArticleHeader
