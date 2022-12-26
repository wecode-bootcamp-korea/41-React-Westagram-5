import React, { useState } from 'react';
import Item from './Item';
import '../../Feeds/Comment/Comment.scss';

function Comment() {
  let [comment, setComment] = useState([]); //map함수 사용하기위해 우선 빈 배열을 만든다.
  let [inputValue, setInputValue] = useState(''); //input의 값을 받아오기위한 state를 만든다.
  // let [active, setActive] = useState("blue_btn blur");

  const button1 = inputValue.length > 1 ? false : true;

  //input값 state에 넣기
  const text = e => {
    setInputValue(e.target.value); //= input의 값을 setInputValue로 받아와 inputValue에 넣어준다.
  };

  //게시버튼 클릭시 댓글추가
  const handleClick = () => {
    let copy = [...comment];
    copy.push(inputValue);
    setComment(copy);
    setInputValue('');
    // setComment([...comment, inputValue]); //기존배열에 새로운 input의 값을 동시에 넣어준다
    // setInputValue(""); //input이 게시되면 초기화해줌
  };

  //엔터키 입력시 댓글추가
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <>
      {comment.map(function (a, idx) {
        //a = 배열의 값
        return (
          // -----중요!!!!  map함수의 비효율성을 줄이기 위해 입력해줌-----
          <ul key={idx} id="comment_wrap">
            <Item comment={comment} setComment={setComment} a={a} />
          </ul>
        );
      })}

      <div id="add_comment">
        <input
          type="text"
          value={inputValue}
          placeholder="댓글 달기..."
          id="comment_input"
          onChange={text}
          onKeyPress={handleKeyPress}
        />
        <button
          id="add_btn"
          disabled={button1}
          className={'blue_btn' + (inputValue.length ? '' : ' blur')} //state 가져올때 중괄호 안해도됨... 바보
          onClick={handleClick}
        >
          게시
        </button>
      </div>
    </>
  );
}

export default Comment;
