import React from 'react'

const MainArticleComment = props => {
  return (
    <div className="main_article_comments">
      <div className="main_article_comment_1">
        <ul>
          <li>PostMalone님 외 10명이 좋아합니다.</li>
        </ul>
      </div>
      <div className="main_article_comment_2">
        <ul>
          {props.dataList.map((it, idx) => (
            <div className="main_article_comments_wrap">
              <li key={it.id} {...it}>
                JAKESJK {it.comment}
              </li>
              <button
                onClick={() => {
                  if (window.confirm(`${it.id}번째 댓글을 삭제하시겠습니까?`)) {
                    props.onDelete(it.id)
                  }
                }}
              >
                삭제하기
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainArticleComment
