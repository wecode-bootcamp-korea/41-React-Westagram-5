import React from 'react';
import '../../MainRight/SideBox/SideBox.scss';

function SideBox({ children }) {
  return (
    <div id="side_box">
      <div id="side_info_wrap">
        <div className="title">스토리</div>
        <div>모두 보기</div>
      </div>
      {children}
    </div>
  );
}

export default SideBox;
