import React, { useEffect, useState } from 'react';
import ReactCount from './ReactCount/ReactCount';
import Comment from './Comment/Comment';
import '../Feeds/Feeds.scss';
import Feed from './ReactCount/Feed/Feed';

function Feeds() {
  //데이터 받아오기
  useEffect(() => {
    fetch('/data/userContentList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setContent(data);
      });
  });

  let [count, setCount] = useState(10);
  let [content, setContent] = useState([]);

  return (
    <div id="feeds">
      {content.map(info => {
        return (
          <Feed key={info.id} info={info} count={count} setCount={setCount} />
        );
      })}
    </div>
  );
}

export default Feeds;
