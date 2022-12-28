import { useState } from 'react';
import './Main.scss';
import chat from '../../../assets/images/galim/chat.png';
import dally from '../../../assets/images/galim/dally.jpeg';
import postImg from '../../../assets/images/galim/post-img.jpg';
import profileImg from '../../../assets/images/galim/profile-img.jpg';
import redHeart from '../../../assets/images/galim/redheart.png';
import saveInstagram from '../../../assets/images/galim/save-instagram.png';
import share from '../../../assets/images/galim/share.png';
import wecodeLogo from '../../../assets/images/galim/wecode-logo.jpeg';
import Comment from '../../../components/galim/Comment';
import Nav from '../../../components/Nav/Nav';
import { ASIDE_ETC_TEXT } from '../../../components/galim/aside';

const MainGalim = () => {
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
    <div className="main-wrap">
      <Nav />

      <div className="main-content">
        <section>
          <div className="main-userpost-wrap">
            <div className="main-userpost-idwrap">
              <div className="main-userpost-id">
                <img src={profileImg} alt="위스타그램 프로필사진" />
                <p>instagalim</p>
              </div>
              <div className="main-user-option">
                <i className="fa-solid fa-ellipsis fa-1x" />
              </div>
            </div>

            <article>
              <img
                src={postImg}
                alt="위스타그램 게시글"
                className="main-user-posting"
              />
              <div className="main-user-commentwrap">
                <div className="main-userpost-logo">
                  <div className="post-icon">
                    <img src={redHeart} alt="좋아요" />
                    <img src={chat} alt="댓글" />
                    <img src={share} alt="공유하기" />
                  </div>
                  <div className="bookmark-wrap">
                    <img src={saveInstagram} alt="북마크" />
                  </div>
                </div>
                <p className="main-user-content">
                  <span className="user-id-color">wecode_bootcamp</span>님 외{' '}
                  <span className="user-id-color">10명</span>이 좋아합니다
                </p>
                <div className="main-content-wrap">
                  <span className="user-id-color">instagalim</span>
                  <span className="post-content">
                    위코드에서 먹은 돼지불백! 너무 맛있당...
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

        <aside>
          <div className="main-aside-user">
            <img src={wecodeLogo} alt="위코드 인스타그램 로고" />
            <div className="main-aside-userid">
              <h1>wecode_bootcamp</h1>
              <p>WeCode | 위코드</p>
            </div>
          </div>
          <div className="main-aside-story">
            <div className="main-aside-storytitle">
              <p className="color-grey">스토리</p>
              <p>모두 보기</p>
            </div>
            <ul>
              <li className="main-aside-storyitem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-storyid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">16분 전</p>
                </div>
              </li>
              <li className="main-aside-storyitem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-storyid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">32분 전</p>
                </div>
              </li>
              <li className="main-aside-storyitem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-storyid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">51분 전</p>
                </div>
              </li>
              <li className="main-aside-storyitem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-storyid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">1시간 전</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="main-aside-recommend">
            <div className="main-aside-recommendtitle">
              <p className="color-grey">회원님을 위한 추천</p>
              <p>모두 보기</p>
            </div>
            <ul>
              <li className="main-aside-recommenditem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-recommendid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">wecode_bootcamp님 외 ...</p>
                </div>
                <p className="main-aside-recommenditemfollow">팔로우</p>
              </li>
              <li className="main-aside-recommenditem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-recommendid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">wecode_bootcamp님 외 ...</p>
                </div>
                <p className="main-aside-recommenditemfollow">팔로우</p>
              </li>
              <li className="main-aside-recommenditem">
                <img src={dally} alt="스토리 프로필사진" />
                <div className="main-aside-recommendid">
                  <p className="user-id">im_dally</p>
                  <p className="color-grey">wecode_bootcamp님 외 ...</p>
                </div>
                <p className="main-aside-recommenditemfollow">팔로우</p>
              </li>
            </ul>
          </div>

          <div className="main-aside-etc">
            {ASIDE_ETC_TEXT.map(etc => (
              <span key={etc.id}>{etc.text}</span>
            ))}
            <p>© 2022 INSTAGRAM</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainGalim;
