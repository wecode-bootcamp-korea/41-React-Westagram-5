//Import Img
// import navImg from "../../Assets/images/nav1.png";
// import jakeprofileImg from "../../Assets/images/jakeprf.png";

import navImg from '../../assets/images/sungjae/images/nav1.png';
import jakeprofileImg from '../../assets/images/sungjae/images/jakeprf.png';

const MainArticleHeader = () => {
  return (
    <div className="main_article_header">
      <div className="main_article_header_left">
        <img id="Jake" src={jakeprofileImg} alt="jake" />
        <p>JakeSJK</p>
      </div>
      <img src={navImg} alt="nav" />
    </div>
  );
};

export default MainArticleHeader;
