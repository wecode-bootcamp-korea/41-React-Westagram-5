import { React, useState } from 'react';
import './ChildComments.scss';
export default function ChildComments({ x, index, editCommentList }) {
  // x:댓글, index:새로운댓글인지 수정댓글인지 알려줄 인덱스번호, editCommentList: 수정댓글함수
  const [colorKey, setColorKey] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [editCommentValue, setEditCommentValue] = useState(''); // 수정할 댓글의 Input

  const editComment = e => {
    // 수정할 댓글인 input 값을 저장할 변수
    setEditCommentValue(e.target.value);
  };
  const toggle = () => {
    setIsEdit(!isEdit);
  };
  const click = () => {
    setColorKey(prev => !prev);
    console.log(colorKey);
  };
  const deltedButton = e => {
    return e.target.parentElement.remove();
  };
  // 댓글 수정을 위한 함수.
  const onSubmit = (index, editCommentValue) => e => {
    // index와 수정댓글 값을 받아온다
    e.preventDefault();
    setIsEdit(true); // 수정값을 true 변환 시키면 수정 input이 작동하게 끔 만들어줌
    editCommentList(index, editCommentValue); // 인자로 받아온 editCommentList에 인덱스와 수정댓글값을 가져옴
  };
  return (
    <div className="article-comment">
      {isEdit ? (
        <div>
          <span className="nickname-bold">afksldmf</span>
          <span className="comment">{x}</span>
          <i
            onClick={click}
            className={'fa-solid fa-fish fa-sharp' + (colorKey ? ' heart' : '')}
          ></i>
          <i className="fa-solid fa-pencil" onClick={toggle}></i>
          <i className="fa-solid fa-trash" onClick={deltedButton}></i>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="수정하기"
            onChange={editComment} // 수정댓글의 input 값을 받아줄 함수
            value={editCommentValue} // 수정댓글의 input 값
          />
          {/* 버튼이 클릭 되었을때 onSumit함수를 받아오고 그 인자로
                    부모 컴포넌트에서 받아온 index와 수정댓글의 값을 넣어줌 */}
          <button onClick={onSubmit(index, editCommentValue)}>수정</button>
        </div>
      )}
    </div>
  );
}
