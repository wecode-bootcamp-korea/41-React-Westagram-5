import React, { children } from 'react';
import AsideList from './AsideList/AsideList';
import UserInfo from '../MainRight/UserInfo/UserInfo';
import UserInfoSub from '../MainRight/UserInfo/UserInfoSub';
import SideBox from '../MainRight/SideBox/SideBox';
import '../../Main/MainRight/MainRight.scss';

function MainRight() {
  return (
    <div id="main_right">
      <UserInfo />
      <SideBox>
        <UserInfoSub />
        {children}
      </SideBox>
      <SideBox>
        {children}
        <UserInfoSub />
      </SideBox>
      <AsideList />
    </div>
  );
}

export default MainRight;
