// import MainSideHeader from '../../Components/MainComponents/MainSideHeader';
// import MainSideAccessList from '../../Components/MainComponents/MainSideAccessList';
// import MainSideFollowList from '../../Components/MainComponents/MainSideFollowList';

import MainSideHeader from '../../../components/MainComponents/MainSideHeader'
import MainSideAccessList from '../../../components/MainComponents/MainSideAccessList'
import MainSideFollowList from '../../../components/MainComponents/MainSideFollowList'

const MainSide = () => {
  return (
    <div div className="main_side">
      <MainSideHeader />
      <MainSideAccessList />
      <MainSideFollowList />
    </div>
  )
}

export default MainSide
