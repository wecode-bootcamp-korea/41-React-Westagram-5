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
    }
  }

  return (
    <div className="main_article_ux">
      <div className="main_article_ux_wrap">
        <input
          name="comment"
          value={comment}
          onChange={onCommentHandler}
          placeholder="댓글달기"
          ref={commentInput}
        />
        <button onClick={changeCommentHandler}>게시</button>
      </div>
    </div>
  )
}

export default MainArticleUx
