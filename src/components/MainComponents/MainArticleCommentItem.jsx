const MainArticleCommentItem = props => {
  return (
    <div className="main_article_comments_wrap">
      <li key={props.id}>JAKESJK {props.comment}</li>
      <button
        onClick={() => {
          console.log('???')
          if (window.confirm(`${props.id}번째 댓글을 삭제하시겠습니까?`)) {
            props.onDelete(props.id)
          }
        }}
      >
        삭제하기
      </button>
    </div>
  )
}

export default MainArticleCommentItem
