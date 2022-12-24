import React from 'react'

const MainArticleComment = props => {
  console.log(props.dataList)
  console.log(props.onDelete)
  console.log(props.id)

  const dummy_list = [
    'JakeSJK ㅎㅇㅎㅇ',
    'JakeSJK 크리스마스날 뭐하지?',
    'JakeSJK 나홀로집에?',
  ]

  return (
    <div className="main_article_comments">
      <div className="main_article_comment_1">
        <ul>
          <li>PostMalone님 외 10명이 좋아합니다.</li>
        </ul>
      </div>
      <div className="main_article_comment_2">
        <ul>
          {/* Map메서드돌리기 */}
          {dummy_list.map((it, idx) => (
            <li>{dummy_list[idx]}</li>
          ))}
          {/* Map메서드돌리기 */}
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
