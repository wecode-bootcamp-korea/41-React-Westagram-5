import React from 'react'

import MainHeader from './MainHeader'
import MainArticle from './MainArticle'
import MainSide from './MainSide'

import './Main.scss'

const MainSungjae = () => {
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
  )
}

export default MainSungjae
