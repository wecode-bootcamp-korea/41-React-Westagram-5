import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Jinkyung Compo
import LoginJinkyung from './pages/jinkyung/Login/LoginJinkyung';
import MainJinkyung from './pages/jinkyung/Main/MainJinkyung';

//Nahyun Compo
import LoginNahyun from './pages/nahyun/Login/LoginNahyun';
import MainNahyun from './pages/nahyun/Main/MainNahyun';

//Galim Compo
import LoginGalim from './pages/galim/Login/LoginGalim';
import MainGalim from './pages/galim/Main/MainGalim';

//Sungjae Compo
import LoginSungjae from './pages/sungjae/Login/LoginSungjae';
import MainSungjae from './pages/sungjae/Main/MainSungjae';
import SignUp from './pages/jinkyung/SignUp/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUp-jinkyung" element={<SignUp />} />
        <Route path="/login-jinkyung" element={<LoginJinkyung />} />
        <Route path="/main-jinkyung" element={<MainJinkyung />} />

        <Route path="/login-nahyun" element={<LoginNahyun />} />
        <Route path="/main-nahyun" element={<MainNahyun />} />
        <Route path="/login-galim" element={<LoginGalim />} />
        <Route path="/main-galim" element={<MainGalim />} />
        <Route path="/login-sungjae" element={<LoginSungjae />} />
        <Route path="/main-sungjae" element={<MainSungjae />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
