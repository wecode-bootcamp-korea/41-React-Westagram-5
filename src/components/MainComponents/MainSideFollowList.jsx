import friend5 from '../../assets/images/sungjae/images/friend5.png'
import friend6 from '../../assets/images/sungjae/images/friend6.png'
import friend7 from '../../assets/images/sungjae/images/friend7.png'
import friend8 from '../../assets/images/sungjae/images/friend8.png'

const MainSideFollowList = () => {
  return (
    <div className="main_side_followList">
      <div className="main_side_header_letter">
        <div className="main_side_header_letter_left">
          <p>스토리</p>
        </div>
        <div className="main_side_header_letter_right">
          <p>모두보기</p>
        </div>
      </div>
      <div className="main_side_header_friendList">
        <div className="main_side_accessList_friendList">
          <div className="">
            <img src={friend5} alt="친구1" />
          </div>
          <div className="main_side_accessList_friendList_textWrapper">
            <div>
              <h1>Wecode_bootcamp </h1>
              <p> 1 시간 전</p>
            </div>
          </div>
        </div>
        <div>
          <h2> follow</h2>
        </div>
      </div>
      <div className="main_side_header_friendList">
        <div className="main_side_accessList_friendList">
          <div className="">
            <img src={friend6} alt="친구1" />
          </div>
          <div className="">
            <div>
              <h1>Wecode_bootcamp </h1>
              <p> 1 시간 전</p>
            </div>
          </div>
        </div>
        <div>
          <h2> follow</h2>
        </div>
      </div>
      <div className="main_side_header_friendList">
        <div className="main_side_accessList_friendList">
          <div className="">
            <img src={friend7} alt="친구1" />
          </div>
          <div className="main_side_accessList_friendList_textWrapper">
            <div>
              <h1>Wecode_bootcamp </h1>
              <p> 1 시간 전</p>
            </div>
          </div>
        </div>
        <div>
          <h2> follow</h2>
        </div>
      </div>
      <div className="main_side_header_friendList">
        <div className="main_side_accessList_friendList">
          <div className="">
            <img src={friend8} alt="친구1" />
          </div>
          <div className="main_side_accessList_friendList_textWrapper">
            <div>
              <h1>Wecode_bootcamp </h1>
              <p> 1 시간 전</p>
            </div>
          </div>
        </div>
        <div>
          <h2> follow</h2>
        </div>
      </div>
    </div>
  )
}

export default MainSideFollowList
