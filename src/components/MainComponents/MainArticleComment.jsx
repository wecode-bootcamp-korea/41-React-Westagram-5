import React from 'react'
import MainArticleCommentItem from './MainArticleCommentItem'

const MainArticleComment = props => {
  console.log(props.onDelete)

  return (
    <div className="main_article_comments">
      <div className="main_article_comment_1">
        <ul>
          <li>PostMalone님 외 10명이 좋아합니다.</li>
        </ul>
      </div>
      <div className="main_article_comment_2">
        <ul>
          {COMMENT_LIST.map(item => {
            return (
              <li key={item.id}>
                {item.writer} : {item.comment}
              </li>
            )
          })}

          {props.dataList.map(item => {
            return (
              <MainArticleCommentItem
                key={item.id}
                id={item.id}
                comment={item.comment}
                onDelete={props.onDelete} // 의미가 없는건데...
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default MainArticleComment

// 상수데이터
const COMMENT_LIST = [
  {
    id: 1,
    writer: 'Unknown01',
    comment: '크리스마스날 뭐하실거에요..?',
  },
  {
    id: 2,
    writer: 'Unknown02',
    comment: '와인파티하러가요',
  },
  {
    id: 3,
    writer: 'Unknown03',
    comment: 'ㅠㅠ나홀로크리스마스',
  },
]
