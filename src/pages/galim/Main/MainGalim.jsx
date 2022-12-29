import { useState, useEffect } from 'react';
import './Main.scss';
// import chat from '../images/galim/chat.png';
import dally from '../../../assets/images/galim/dally.jpeg';
// import postImg from '../../../assets/images/galim/post-img.jpg';
// import profileImg from '../../../assets/images/galim/profile-img.jpg';
// import redHeart from '../../../assets/images/galim/redheart.png';
// import saveInstagram from '../../../assets/images/galim/save-instagram.png';
// import share from '../../../assets/images/galim/share.png';
import wecodeLogo from '../../../assets/images/galim/wecode-logo.jpeg';
// import Comment from '../../../components/galim/Comment';
import Nav from '../../../components/Nav/Nav';
import { ASIDE_ETC_TEXT } from '../../../components/galim/aside';
import Feed from '../../../components/galim/Feed';

const MainGalim = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('./data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  console.log(feedList);

  return (
    <div className="main-wrap">
      <Nav />
      <div className="main-content">
        <main style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {feedList.map(feed => (
            <Feed key={feed.id} feed={feed} />
          ))}
        </main>
        <aside>
          <div className="main-aside-user">
            <img src={wecodeLogo} alt="위코드 인스타그램 로고" />
            <div className="main-aside-userid">
              <h1>wecode_bootcamp</h1>
              <p>WeCode | 위코드</p>
            </div>
          </div>
          <div className="main-aside-story">
            <div className="main-aside-storytitle">
              <p className="color-grey">스토리</p>
              <p>모두 보기</p>
            </div>
            <ul>
              <li className="main-aside-storyitem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-storyid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">16분 전</p>
                </div>
              </li>
              <li className="main-aside-storyitem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-storyid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">32분 전</p>
                </div>
              </li>
              <li className="main-aside-storyitem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-storyid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">51분 전</p>
                </div>
              </li>
              <li className="main-aside-storyitem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-storyid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">1시간 전</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="main-aside-recommend">
            <div className="main-aside-recommendtitle">
              <p className="color-grey">회원님을 위한 추천</p>
              <p>모두 보기</p>
            </div>
            <ul>
              <li className="main-aside-recommenditem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-recommendid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">wecode_bootcamp님 외 ...</p>
                </div>
                <p className="main-aside-recommenditemfollow">팔로우</p>
              </li>
              <li className="main-aside-recommenditem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-recommendid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">wecode_bootcamp님 외 ...</p>
                </div>
                <p className="main-aside-recommenditemfollow">팔로우</p>
              </li>
              <li className="main-aside-recommenditem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-recommendid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">wecode_bootcamp님 외 ...</p>
                </div>
                <p className="main-aside-recommenditemfollow">팔로우</p>
              </li>
            </ul>
          </div>

          <div className="main-aside-etc">
            {ASIDE_ETC_TEXT.map(etc => (
              <span key={etc.id}>{etc.text}</span>
            ))}
            <p>© 2022 INSTAGRAM</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainGalim;
