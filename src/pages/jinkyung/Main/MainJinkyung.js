import React from 'react';
import Feeds from './Feeds/Feeds';
import MainRight from './MainRight/MainRight';
import '../Main/Main.scss';
import '../../../styles/common.scss';

const Main = () => {
  return (
    <>
      <nav>
        <div id="nav_wrap">
          <div id="logo_wrap">
            <div id="logo_1_wrap">
              <div className="logo_1" />
            </div>
            <div className="logo_2">westagram</div>
          </div>
          <div id="search">
            <input type="text" placeholder="검색" />
            <div id="drop_box_wrap" className="none_view">
              <ul id="user_info_wrap">
                <li>
                  <img
                    id="user_img"
                    alt="user_img"
                    src="images/jinkyung/person_img.jpg"
                  />
                  <div id="user_name_wrap">
                    <div className="name">_yums_s</div>
                    <div className="name_sub">16분 전</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="info_wrap">
            <div className="icon_1" />
            <div className="icon_2" />
            <div className="icon_3">
              <ul id="user_info_drop_box" className="none_view">
                <li>
                  <img src="images/jinkyung/user.png" alt="user_icon" />
                  <div>프로필</div>
                </li>
                <li>
                  <img src="images/jinkyung/ribbon.png" alt="bookmark_icon" />
                  <div>저장됨</div>
                </li>
                <li>
                  <img src="images/jinkyung/settings.png" alt="user_icon" />
                  <div>설정</div>
                </li>
                <li>로그아웃</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Feeds />
        <MainRight />
      </main>
    </>
  );
};

export default Main;
