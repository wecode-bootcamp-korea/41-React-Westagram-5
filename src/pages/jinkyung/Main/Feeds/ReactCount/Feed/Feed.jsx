import React, { useState } from 'react';
import '../Feed/Feed.scss';
import ReactCount from '../ReactCount';
import Comment from '../../Comment/Comment';

function Feed({ info, count, setCount }) {
  let [heart, setHeart] = useState(false);

  const heartBtn = heart ? ' active' : '';

  const active = () => {
    setHeart(!heart);
    heart ? setCount(count - 1) : setCount(count + 1);
  };

  return (
    <div id="article">
      <div id="user_wrap">
        <div id="user_info">
          <img className="user_img" key={info.id} src={info.userImg} />
          <div className="user_name">{info.userName}</div>
        </div>
        <div id="more">
          <div className="more_icon" />
        </div>
      </div>
      <img id="content_img" src={info.contentImg} />
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
      <ReactCount info={info} count={count} />
      <Comment />
    </div>
  );
}

export default Feed;
