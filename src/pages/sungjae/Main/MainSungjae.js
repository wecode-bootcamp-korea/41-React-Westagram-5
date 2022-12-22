import React from 'react';
import './Main.scss';

// Import useNavigate
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Import Component
import MainHeader from './MainHeader';
import MainArticle from './MainArticle';
import MainSide from './MainSide';

const MainSungjae = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/main-sungjae');
  };
  //
  return (
    <React.Fragment>
      <MainHeader />
      <div className="main">
        <div className="main_container">
          <MainArticle />
          <MainSide />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainSungjae;
