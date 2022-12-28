import React from 'react';
import '../ReactCount/ReactCount.scss';

function ReactCount({ info, count }) {
  return (
    <div id="react_user_wrap">
      <img className="react_user_img" src={info.commentUserImg} />
      <div className="react_user_count">
        {info.commentName}님 외 {count}명이 좋아합니다
      </div>
    </div>
  );
}

export default ReactCount;
