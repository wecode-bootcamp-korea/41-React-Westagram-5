//Img
// import advertisement1 from '../../Assets/images/adver1.png';
// import advertisement2 from '../../Assets/images/adver2.png';

import advertisement1 from '../../assets/images/sungjae/images/adver1.png';
import advertisement2 from '../../assets/images/sungjae/images/adver2.png';

const LoginAdvertisemnet = () => {
  return (
    <div className="login_main_advertisement">
      <p>Get the app.</p>
      <div className="login_main_advertisement_wrap">
        <img className="login_main_advertisement_img" src={advertisement1} />
        <img src={advertisement2} />
      </div>
    </div>
  );
};

export default LoginAdvertisemnet;
