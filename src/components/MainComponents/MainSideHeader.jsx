import jakeprofileImg from '../../assets/images/sungjae/images/jakeprf.png'

const MainSideHeader = () => {
  return (
    <div className="main_side_header">
      <div className="main_side_header_container">
        <img src={jakeprofileImg} />
        <div className="main_side_header_container_letter">
          <h1>Wecode_bootcamp </h1>
          <p> Wecode | 위코드</p>
        </div>
      </div>
    </div>
  )
}

export default MainSideHeader
