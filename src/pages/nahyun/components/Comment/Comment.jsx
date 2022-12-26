import React from 'react';
import { useState } from 'react';
import './Comment.scss';
import ChildComments from './ChildComments';
export default function Comment() {
  const [input, setInput] = useState(''); // 댓글창 안에 넣어줄 input 값
  const [arrayDiv, setArrayDiv] = useState([]); // 자식 컴포넌트에 추가할 댓글달기 배열

  // 댓글달기후 수정기능을 추가해줄 상태 끌어올리기 함수
  const editCommentList = (index, value) => {
    // 수정 댓글 리스트를 index와 value(값)을 인자로 받음
    const next = arrayDiv.map((comment, i) => {
      // 수정할 댓글을 map()으로 돌려 comment와 i(index) 인자를 받음
      if (index === i) return value; // 수정댓글 index와 arratDiv i(index라고 가정)가 같으면 수정댓글의 value를 받는다
      return comment; // 그게 아니라면 기존 댓글(arrayDiv의 댓글)을 반환한다
    });
    console.log(next);
    setArrayDiv(next); // 댓글 배열에 수정 댓글을 넣어준다
  };

  const handleInput = e => {
    setInput(e.target.value);
  };
  const comment = e => {
    setArrayDiv([...arrayDiv, input]);
    setInput('');
  };

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      comment();
    }
  };

  return (
    <div>
      {arrayDiv.map((x, index) => {
        // 댓글을 배열로 돌려줄 map()작성
        return (
          <ChildComments // 댓글기능의 자식 컴포넌트
            x={x} // 새로운 댓글을 받을 인자
            key={`${index}${x}`} // map()의 고유한 키 값
            index={index} // 새로운 댓글인지, 새로운 댓글인지 알려줄 index
            editCommentList={editCommentList} // 수정댓글의 함수
          />
        );
      })}

      <div className="article-input">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글달기"
          value={input || ''}
          onChange={handleInput}
          onKeyUp={onKeyPress}
        />

        <button
          className="btn"
          onClick={comment}
          // onChange={handleInput}
          style={
            input && input.length > 0
              ? { color: 'blue', fontWeight: 'bold' }
              : { color: 'rgb(157, 222, 244)' }
          }
        >
          게시
        </button>
      </div>
    </div>
  );
}
