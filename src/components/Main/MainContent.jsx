import Header from 'components/Main/Header'
import TweetInput from 'components/Main/TweetInput'
import TweetCollection from 'components/Main/TweetCollection'

const MainContent = ({ handleTweetModalShow, handleReplyModalShow }) => {
  return(
    <>
      <Header />
      <TweetInput 
        handleTweetModalShow={handleTweetModalShow}
      />
      <TweetCollection 
        handleReplyModalShow={handleReplyModalShow}
      />
    </>
  )
}

export default MainContent