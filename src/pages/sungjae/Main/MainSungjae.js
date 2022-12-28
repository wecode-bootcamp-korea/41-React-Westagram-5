import React, { useEffect, useState } from 'react'

import MainHeader from './MainHeader'
import MainArticle from './MainArticle'
import MainSide from './MainSide'

import './Main.scss'

const MainSungjae = () => {
  const [articleList, setArticleList] = useState([])
  useEffect(() => {
    fetch('/data/feed.json')
      .then(response => response.json())
      .then(result => {
        setArticleList(result)
      })
  }, [])

  return (
    <React.Fragment>
      <MainHeader />
      <div className="main">
        <div className="main-container">
          <div className="main-container-article-wrap">
            {articleList.map(item => {
              return <MainArticle article={item} />
            })}
          </div>
          {/* <MainArticle /> */}
          <MainSide />
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainSungjae
