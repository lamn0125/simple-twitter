import Header from 'components/Main/Header'
import TweetInput from 'components/Main/TweetInput'
import TweetCollection from 'components/Main/TweetCollection'

const MainContent = () => {
  return(
    <div>
      <Header/>
      <TweetInput/>
      <TweetCollection/>
    </div>
  )
}

export default MainContent