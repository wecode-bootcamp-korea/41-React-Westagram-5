import jakeprofileImg from '../../assets/images/sungjae/images/jakeprf.png'

const MainSideHeader = () => {
  return (
    <div className="main-side-header">
      <div className="main-side-header-container">
        <img src={jakeprofileImg} />
        <div className="main-side-header-container-letter">
          <h1>Wecode_bootcamp </h1>
          <p> Wecode | 위코드</p>
        </div>
      </div>
    </div>
  )
}

export default MainSideHeader
