import React from 'react'
import MainArticleCommentItem from './MainArticleCommentItem'

const MainArticleComment = ({ article, dataList, onDelete }) => {
  return (
    <div className="main-article-comments">
      <div className="main-article-comment_1">
        <ul>
          <li>{article.liker}님 외 10명이 좋아합니다.</li>
        </ul>
      </div>
      <div className="main-articl-comment_2">
        <ul>
          {dataList.map(item => {
            return (
              <MainArticleCommentItem
                key={item.id}
                id={item.id}
                comment={item.comment}
                onDelete={onDelete}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MainArticleComment
