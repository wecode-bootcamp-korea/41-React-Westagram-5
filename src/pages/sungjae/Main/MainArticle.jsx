//Import Img
// import articleImg from '../../Assets/images/christmas.jpg';
// import redHeartImg from '../../Assets/images/redheart.png';
// import chatImg from '../../Assets/images/chat.png';
// import exportImg from '../../Assets/images/export.png';
// import saveImg from '../../Assets/images/save.png';

import articleImg from '../../../assets/images/sungjae/images/christmas.jpg';
import redHeartImg from '../../../assets/images/sungjae/images/redheart.png';
import chatImg from '../../../assets/images/sungjae/images/chat.png';
import exportImg from '../../../assets/images/sungjae/images/export.png';
import saveImg from '../../../assets/images/sungjae/images/save.png';

// import MainArticleHeader from "../../Components/MainComponents/MainArticleHeader";
// import MainArticleComment from "../../Components/MainComponents/MainArticleComment";
// import MainArticleUx from "../../Components/MainComponents/MainArticleUx";

import MainArticleHeader from '../../../components/MainComponents/MainArticleHeader';
import MainArticleComment from '../../../components/MainComponents/MainArticleComment';
import MainArticleUx from '../../../components/MainComponents/MainArticleUx';

const MainArticle = () => {
  return (
    <div className="main_article">
      <MainArticleHeader />

      {/* Component 나누기 애매한 부분 */}
      <div
        className="main_article_image"
        style={{ backgroundImage: `url(${articleImg})` }}
      ></div>
      <div className="main_article_icon_wrap">
        <div className="main_article_icon_wrap_left">
          <img src={redHeartImg} alt="logo" />
          <img src={chatImg} alt="logo" />
          <img src={exportImg} alt="logo" />
        </div>
        <div>
          <img id="bugImg" src={saveImg} alt="logo" />
        </div>
        <div></div>
      </div>

      <MainArticleComment />
      <MainArticleUx />
    </div>
  );
};

export default MainArticle;
