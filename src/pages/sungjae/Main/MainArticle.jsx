//Import tools
import { useRef, useState } from 'react'

//Import Img
import articleImg from '../../../assets/images/sungjae/images/christmas.jpg'
import redHeartImg from '../../../assets/images/sungjae/images/redheart.png'
import chatImg from '../../../assets/images/sungjae/images/chat.png'
import exportImg from '../../../assets/images/sungjae/images/export.png'
import saveImg from '../../../assets/images/sungjae/images/save.png'
import MainArticleHeader from '../../../components/MainComponents/MainArticleHeader'
import MainArticleComment from '../../../components/MainComponents/MainArticleComment'

import MainArticleUx from '../../../components/MainComponents/MainArticleUx'

const MainArticle = () => {
  const [data, setData] = useState([])
  const dataId = useRef(0)

  const onCreate = comment => {
    const newComment = {
      id: dataId.current,
      comment,
    }
    dataId.current += 1
    setData([...data, newComment])
  }

  return (
    <div className="main_article">
      <MainArticleHeader />

      {/* Component 나누기 애매한 부분 */}
      <div
        className="main_article_image"
        style={{ backgroundImage: `url(${articleImg})` }}
      ></div>
      <div className="main_article_icon_wrap">
        <div className="main_article_icon_wrap_left">
          <img src={redHeartImg} alt="logo" />
          <img src={chatImg} alt="logo" />
          <img src={exportImg} alt="logo" />
        </div>
        <div>
          <img id="bugImg" src={saveImg} alt="logo" />
        </div>
        <div></div>
      </div>

      {/* 이 컴포넌트에서 데이터를 뿌려준다. */}

      <MainArticleComment dataList={data} />
      <MainArticleUx onCreate={onCreate} />
    </div>
  )
}

export default MainArticle
