import React from 'react';
import '../../Feeds/Comment/Item.scss';

function Item(props) {
  return (
    <>
      <div className="nickname">hello__</div>
      {props.a}
      <span
        className={props.heartBtn} //class명에 disable로 만든 조건을 통해 클래스명을 지정
        disabled={props.heart} // disable에 boolean값을 넣어준다
        onClick={() => {
          props.setHeart(!props.heart);
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
