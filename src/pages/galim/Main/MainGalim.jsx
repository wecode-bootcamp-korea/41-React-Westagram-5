import React from 'react';
import './Main.scss';

const MainGalim = () => {
  return (
    <div className="main__wrap">
      <nav>
        <div className="main__logo">
          <img src="./images/instagram-logo.png" alt="위스타그램 로고" />
          <span>|</span>
          <h1>westagram</h1>
        </div>
        <form className="search">
          <input type="text" placeholder="검색" />
        </form>
        <div className="main__userdata">
          <img
            src="./images/explore.png"
            alt="추천 게시글"
            className="main__userdata--recommendpost"
          />
          <img
            src="./images/heart.png"
            alt="좋아요"
            className="main__userdata--like"
          />
          <img
            src="./images/profile.png"
            alt="내 프로필"
            className="main__userdata--info"
          />
        </div>
      </nav>

      <div className="main__content">
        <section>
          <div className="main__userpost--wrap">
            <div className="main__userpost--idwrap">
              <div className="main__userpost--id">
                <img src="./images/IMG_2913.jpg" alt="위스타그램 프로필사진" />
                <p>instagalim</p>
              </div>
              <div className="main__user--option">
                <i className="fa-solid fa-ellipsis fa-1x" />
              </div>
            </div>

            <article>
              <img
                src="./images/post-img.jpg"
                alt="위스타그램 게시글"
                className="main__user--posting"
              />
              <div className="main__user--commentwrap">
                <div className="main__userpost--logo">
                  <div className="post__icon">
                    <img src="./images/redheart.png" alt="좋아요" />
                    <img src="./images/chat.png" alt="댓글" />
                    <img src="./images/share.png" alt="" />
                  </div>
                  <div className="bookmark__wrap">
                    <img src="./images/save-instagram.png" alt="북마크" />
                  </div>
                </div>
                <p className="main__user--content">
                  <span className="user__id--color">wecode_bootcamp</span>님 외{' '}
                  <span className="user__id--color">10명</span>이 좋아합니다
                </p>
                <div className="main__content--wrap">
                  <span className="user__id--color">instagalim</span>
                  <span className="post--content">
                    위코드에서 먹은 돼지불백! 너무 맛있당...
                    <span className="color__grey">더 보기</span>
                  </span>
                  <p className="color__grey">42분 전</p>
                </div>
              </div>
              <div className="comment__list">
                <div className="main__userpost--comment">
                  <input id="comment" type="text" placeholder="댓글 달기..." />
                  <span>
                    <button id="comment__btn" type="submit">
                      게시
                    </button>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <aside>
          <div className="main__aside--user">
            <img src="./images/wecode-logo.jpeg" alt="위코드 인스타그램 로고" />
            <div className="main__aside--userid">
              <h1>wecode_bootcamp</h1>
              <p>WeCode | 위코드</p>
            </div>
          </div>
          <div className="main__aside--story">
            <div className="main__aside--storytitle">
              <p className="color__grey">스토리</p>
              <p>모두 보기</p>
            </div>
            <ul>
              <li className="main__aside--storyitem">
                <img src="./images/dally.jpeg" alt="스토리 프로필사진" />
                <div className="main__aside--storyid">
                  <p className="user__id">im_dally</p>
                  <p className="color__grey">16분 전</p>
                </div>
              </li>
              <li className="main__aside--storyitem">
                <img src="./images/dally.jpeg" alt="스토리 프로필사진" />
                <div className="main__aside--storyid">
                  <p className="user__id">im_dally</p>
                  <p className="color__grey">32분 전</p>
                </div>
              </li>
              <li className="main__aside--storyitem">
                <img src="./images/dally.jpeg" alt="스토리 프로필사진" />
                <div className="main__aside--storyid">
                  <p className="user__id">im_dally</p>
                  <p className="color__grey">51분 전</p>
                </div>
              </li>
              <li className="main__aside--storyitem">
                <img src="./images/dally.jpeg" alt="스토리 프로필사진" />
                <div className="main__aside--storyid">
                  <p className="user__id">im_dally</p>
                  <p className="color__grey">1시간 전</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="main__aside--recommend">
            <div className="main__aside--recommendtitle">
              <p className="color__grey">회원님을 위한 추천</p>
              <p>모두 보기</p>
            </div>
            <ul>
              <li className="main__aside--recommenditem">
                <img src="./images/dally.jpeg" alt="스토리 프로필사진" />
                <div className="main__aside--recommendid">
                  <p className="user__id">im_dally</p>
                  <p className="color__grey">wecode_bootcamp님 외 ...</p>
                </div>
                <p className="main__aside--recommenditemfollow">팔로우</p>
              </li>
              <li className="main__aside--recommenditem">
                <img src="./images/dally.jpeg" alt="스토리 프로필사진" />
                <div className="main__aside--recommendid">
                  <p className="user__id">im_dally</p>
                  <p className="color__grey">wecode_bootcamp님 외 ...</p>
                </div>
                <p className="main__aside--recommenditemfollow">팔로우</p>
              </li>
              <li className="main__aside--recommenditem">
                <img src="./images/dally.jpeg" alt="스토리 프로필사진" />
                <div className="main__aside--recommendid">
                  <p className="user__id">im_dally</p>
                  <p className="color__grey">wecode_bootcamp님 외 ...</p>
                </div>
                <p className="main__aside--recommenditemfollow">팔로우</p>
              </li>
            </ul>
          </div>

          <div className="main__aside--etc">
            <p>
              Instagram 정보﹒지원﹒홍보 센터﹒API﹒
              <br />
              채용 정보﹒개인정보처리방침약관
              <br />
              디렉터리﹒프로필﹒해시태그﹒언어
              <br />
            </p>
            <p>© 2022 INSTAGRAM</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainGalim;
