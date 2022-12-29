import React from 'react';
import './UserInfo.scss';

function UserInfo() {
  return (
    <ul id="user_info_wrap">
      <li>
        <div id="user_img" className="main" />
        <div id="user_name_wrap" className="main">
          <div>ijinkyung</div>
          <div className="name_sub">말티즈 | 3살</div>
        </div>
      </li>
    </ul>
  );
}

export default UserInfo;
