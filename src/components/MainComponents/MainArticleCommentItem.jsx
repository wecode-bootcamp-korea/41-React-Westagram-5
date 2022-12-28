const MainArticleCommentItem = props => {
  console.log(props)
  console.log(props)
  return (
    <div className="main-article-comments-wrap">
      <li key={props.id}> JAKESJK {props.comment} </li>

      <button
        onClick={() => {
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
