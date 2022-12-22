//Import Img
// import friend1 from "../../Assets/images/friend1.png";
// import friend2 from "../../Assets/images/friend2.png";
// import friend3 from "../../Assets/images/friend3.png";
// import friend4 from "../../Assets/images/friend4.png";

import friend1 from '../../assets/images/sungjae/images/friend1.png'
import friend2 from '../../assets/images/sungjae/images/friend2.png'
import friend3 from '../../assets/images/sungjae/images/friend3.png'
import friend4 from '../../assets/images/sungjae/images/friend4.png'

const MainSideAccessList = () => {
  return (
    // Map method 쓰면 좋을 것 같음
    <div className="main_side_accessList">
      <div className="main_side_header_letter">
        <div className="main_side_header_letter_left">
          <p>스토리</p>
        </div>
        <div className="main_side_header_letter_right">
          <p>모두보기</p>
        </div>
      </div>
      <div className="main_side_accessList_friendList">
        <div className="">
          <img src={friend1} alt="친구1" />
        </div>
        <div className="">
          <h1>Wecode_bootcamp </h1>
          <p> 1 시간 전</p>
        </div>
      </div>
      <div className="main_side_accessList_friendList">
        <div className="">
          <img src={friend2} alt="친구1" />
        </div>
        <div className="">
          <h1>Wecode_bootcamp </h1>
          <p> 1 시간 전</p>
        </div>
      </div>
      <div className="main_side_accessList_friendList">
        <div className="">
          <img src={friend3} alt="친구1" />
        </div>
        <div className="">
          <h1>Wecode_bootcamp </h1>
          <p> 1 시간 전</p>
        </div>
      </div>
      <div className="main_side_accessList_friendList">
        <div className="">
          <img src={friend4} alt="친구1" />
        </div>
        <div className="">
          <h1>Wecode_bootcamp </h1>
          <p> 1 시간 전</p>
        </div>
      </div>
    </div>
  )
}

export default MainSideAccessList
