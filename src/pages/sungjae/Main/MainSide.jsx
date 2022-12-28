import MainSideHeader from '../../../components/MainComponents/MainSideHeader'
import MainSideAccessList from '../../../components/MainComponents/MainSideAccessList'
import MainSideFollowList from '../../../components/MainComponents/MainSideFollowList'

const MainSide = () => {
  return (
    <div div className="main-side">
      <MainSideHeader />
      <MainSideAccessList />
      <MainSideFollowList />
    </div>
  )
}

export default MainSide
