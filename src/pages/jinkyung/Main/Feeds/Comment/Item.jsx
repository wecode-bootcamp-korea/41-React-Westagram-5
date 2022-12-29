import React, { useState } from 'react';
import '../../Feeds/Comment/Item.scss';

function Item(props) {
  let [heart, setHeart] = useState(false);

  const heartBtn = heart ? 'full_heart' : 'empty_heart';

  return (
    <>
      <div className="nickname">hello__</div>
      {props.a}
      <span
        className={heartBtn} //class명에 disable로 만든 조건을 통해 클래스명을 지정
        disabled={heart} // disable에 boolean값을 넣어준다
        onClick={() => {
          setHeart(!heart);
        }}
      />
      <span
        className="remove_btn"
        onClick={() => {
          let copy = [...props.comment];
          copy.splice(props.a, 1);
          props.setComment(copy);
        }}
      >
        삭제
      </span>
    </>
  );
}

export default Item;
