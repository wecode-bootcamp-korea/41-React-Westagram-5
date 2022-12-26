import React from 'react';
import '../UserInfo/UserInfoSub.scss';

function UserInfoSub() {
  const USER_INFO_LIST = [
    {
      id: 1,
      img: 'images/jinkyung/user_img_1.jpeg',
      name: 'jaerong_e',
      sub_name: '말티즈 | 5살',
    },
    {
      id: 2,
      img: 'images/jinkyung/user_img_2.jpeg',
      name: 'hu_zzi',
      sub_name: '비숑 | 2살',
    },
  ];

  return (
    <div>
      {USER_INFO_LIST.map(info => {
        return (
          <ul id="user_info_wrap">
            <li key={info.id}>
              <img id="user_img" className="story" src={info.img} />
              <div id="user_name_wrap">
                <div>{info.name}</div>
                <div className="name_sub">{info.sub_name}</div>
              </div>
              <button id="follow_btn" className="blue_btn right">
                팔로우
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default UserInfoSub;
