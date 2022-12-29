const Comment = props => {
  const { comment } = props;
  return (
    <p className="comment-content">
      <span className="comment-user">im_dally</span>
      <span className="comment-value">{comment}</span>
    </p>
  );
};

export default Comment;
