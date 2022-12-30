import React, { useRef, useState } from 'react'

const MainArticleUx = props => {
  const [comment, setComment] = useState([])
  const commentInput = useRef()

  const onCommentHandler = e => {
    setComment(e.target.value)
  }

  const changeCommentHandler = () => {
    if (comment.length === 0) {
      commentInput.current.focus()
    }
    if (comment.length >= 1) {
      props.onCreate(comment)
      alert('저장성공')
      setComment('')
      setIsActive(false)
    }
  }

  const onClickHandler = e => {
    if (e.key === 'Enter') {
      changeCommentHandler()
    }
  }

  // const active = comment.length >= 1;
  const [isActive, setIsActive] = useState(false)
  const isButtonValue = comment.length > 5
  console.log(comment.length)
  const isButtonValueHandler = () => {
    return isButtonValue ? setIsActive(true) : setIsActive(false)
  }

  return (
    <div className="main-article-ux">
      <div>
        <input
          name="comment"
          value={comment}
          onChange={onCommentHandler}
          onKeyUp={isButtonValueHandler}
          onKeyPress={onClickHandler}
          placeholder="댓글달기"
          ref={commentInput}
        />
        <button
          className={isActive ? 'buttonActive' : ''}
          onClick={changeCommentHandler}
        >
          게시
        </button>
      </div>
    </div>
  )
}

export default MainArticleUx
