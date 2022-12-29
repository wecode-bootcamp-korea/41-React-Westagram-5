import { useState } from 'react';
import Comment from './Comment';

const Feed = ({ feed }) => {
  const [commentValue, setCommentValue] = useState('');

  // 댓글이 저장될 공간
  const [commentList, setCommentList] = useState([]);
  // 원래는 단순한 array가 아닌 object로 array를 만들어야 함.
  // 현재 index값으로 key 값을 설정하였으나, 나중에는 id로 key값을 설정해야함.
  // [{id:1,value:'',nickname:''}, {id:2,value:'',nickname:''}, {id:3,value:'',nickname:''}]
  // 입력한 값이 잘 출력되는지 확인
  const handleAddComment = () => {
    let arr = commentList;
    if (commentValue === '') {
      return alert('댓글을 입력해주세요.');
    }
    arr.push(commentValue);
    setCommentList(arr);
    setCommentValue('');
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      handleAddComment();
    }
  };

  const handleUserComment = e => {
    setCommentValue(e.target.value);
  };
  return (
    <section>
      <div className="main-userpost-wrap">
        <div className="main-userpost-idwrap">
          <div className="main-userpost-id">
            <img
              className="main-userpost-img"
              src={feed.profileImg}
              alt="위스타그램 프로필사진"
            />
            <p>instagalim</p>
          </div>
          <div className="main-user-option">
            <i className="fa-solid fa-ellipsis fa-1x" />
          </div>
        </div>

        <article>
          <img
            src={feed.postImg}
            alt="위스타그램 게시글"
            className="main-user-posting"
          />
          <div className="main-user-commentwrap">
            <div className="main-userpost-logo">
              <div className="post-icon">
                {/* <img src={redHeart} alt="좋아요" />
                <img src={chat} alt="댓글" />
                <img src={share} alt="공유하기" /> */}
              </div>
              <div className="bookmark-wrap">
                {/* <img src={saveInstagram} alt="북마크" /> */}
              </div>
            </div>
            <p className="main-user-content">
              <span className="user-id-color">wecode_bootcamp</span>님 외{' '}
              <span className="user-id-color">10명</span>이 좋아합니다
            </p>
            <div className="main-content-wrap">
              <span className="user-id-color">instagalim</span>
              <span className="post-content">
                {feed.text}
                <span className="color-grey">더 보기</span>
              </span>
              <div className="comment-list">
                {commentList.map((comment, idx) => (
                  <Comment key={idx} comment={comment} />
                ))}
              </div>
              <p className="color-grey">42분 전</p>
            </div>
          </div>
          <div className="comment-list">
            <div className="main-userpost-comment">
              <input
                id="comment"
                type="text"
                placeholder="댓글 달기..."
                onChange={handleUserComment}
                onKeyDown={handleKeyDown}
                value={commentValue}
              />
              <span>
                <button id="comment-btn" onClick={handleAddComment}>
                  게시
                </button>
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Feed;
