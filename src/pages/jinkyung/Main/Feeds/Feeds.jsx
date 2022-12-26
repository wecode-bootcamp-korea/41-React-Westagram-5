import React, { useState } from 'react';
import ReactCount from './ReactCount/ReactCount';
import Comment from './Comment/Comment';
import '../Feeds/Feeds.scss';

function Feeds() {
  let [count, setCount] = useState(10);
  let [heart, setHeart] = useState(false);

  const heartBtn = heart ? ' active' : '';

  const active = () => {
    setHeart(!heart);
    heart ? setCount(count - 1) : setCount(count + 1);
  };

  return (
    <div id="feeds">
      <div id="article">
        <div id="user_wrap">
          <div id="user_info">
            <div className="user_img" />
            <div className="user_name">ijinkyung</div>
          </div>
          <div id="more">
            <div className="more_icon" />
          </div>
        </div>
        <div id="content_img" />
        <div id="react_wrap">
          <div id="react_left">
            <div className={'icon_1' + heartBtn} onClick={active} />
            <div className="icon_2" />
            <div className="icon_3" />
          </div>
          <div id="bookmark_wrap">
            <div className="bookmark" />
          </div>
        </div>
        <ReactCount count={count} />
        <Comment />
      </div>
    </div>
  );
}

export default Feeds;
