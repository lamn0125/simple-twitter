import Header from 'components/Main/Header'
import TweetInput from 'components/Main/TweetInput'
import TweetCollection from 'components/Main/TweetCollection'

const MainContent = ({ handleTweetModalShow, handleReplyModalShow, tweets }) => {
  return(
    <>
      <Header />
      <TweetInput 
        handleTweetModalShow={handleTweetModalShow}
      />
      <TweetCollection 
        handleReplyModalShow={handleReplyModalShow}
        tweets={tweets}
      />
    </>
  )
}

export default MainContent