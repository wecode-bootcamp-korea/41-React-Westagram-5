//Import tools
import { useRef, useState } from 'react'
//Import Component
import MainArticleUx from '../../../components/MainComponents/MainArticleUx'
//Import Img
import articleImg from '../../../assets/images/sungjae/images/christmas.jpg'
import redHeartImg from '../../../assets/images/sungjae/images/redheart.png'
import chatImg from '../../../assets/images/sungjae/images/chat.png'
import exportImg from '../../../assets/images/sungjae/images/export.png'
import saveImg from '../../../assets/images/sungjae/images/save.png'
import MainArticleHeader from '../../../components/MainComponents/MainArticleHeader'
import MainArticleComment from '../../../components/MainComponents/MainArticleComment'

const MainArticle = ({ article }) => {
  const [data, setData] = useState(article.comment)
  const dataId = useRef(0)

  const onCreate = comment => {
    const newComment = {
      id: dataId.current,
      comment,
    }
    dataId.current += 1
    setData([...data, newComment])
  }

  const onDelete = targetId => {
    const newCommentList = data.filter(it => it.id !== targetId)
    setData(newCommentList)
  }

  return (
    <div className="main-article">
      <MainArticleHeader />

      <div
        className="main-article-image"
        style={{ backgroundImage: `url(${articleImg})` }}
      ></div>
      <div className="main-article-icon-wrap">
        <div className="main-article-icon-wrap-left">
          <img src={redHeartImg} alt="logo" />
          <img src={chatImg} alt="logo" />
          <img src={exportImg} alt="logo" />
        </div>
        <div>
          <img id="bugImg" src={saveImg} alt="logo" />
        </div>
        <div></div>
      </div>

      <MainArticleComment
        dataList={data}
        onDelete={onDelete}
        article={article}
      />
      <MainArticleUx onCreate={onCreate} />
    </div>
  )
}

export default MainArticle
