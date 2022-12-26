import React from 'react';
import '../UserInfo/UserInfoSub.scss';

function UserInfoSub() {
  return (
    <div>
      <ul id="user_info_wrap">
        <li>
          <div id="user_img" className="story" />
          <div id="user_name_wrap">
            <div>love_cat</div>
            <div className="name_sub">고영희 | 1살</div>
          </div>
          <button id="follow_btn" className="blue_btn right">
            팔로우
          </button>
        </li>
      </ul>
    </div>
  );
}

export default UserInfoSub;
