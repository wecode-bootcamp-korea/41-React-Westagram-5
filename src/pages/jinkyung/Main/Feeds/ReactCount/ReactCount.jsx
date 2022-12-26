import React from 'react';
import '../ReactCount/ReactCount.scss';

function ReactCount(props) {
  return (
    <div id="react_user_wrap">
      <div className="react_user_img" />
      <div className="react_user_count">
        love_cat님 외 {props.count}명이 좋아합니다
      </div>
    </div>
  );
}

export default ReactCount;
