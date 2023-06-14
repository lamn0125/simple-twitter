import Header from 'components/Main/Header'
import TweetInput from 'components/Main/TweetInput'
import TweetCollection from 'components/Main/TweetCollection'

const MainContent = ({ handleTweetModalShow, handleReplyModalShow }) => {
  return(
    <>
      <Header />
      <TweetInput 
        // isModalShow={isModalShow}
        handleTweetModalShow={handleTweetModalShow}
        // handleClose={handleClose}
      />
      <TweetCollection 
        handleReplyModalShow={handleReplyModalShow}
      />
    </>
  )
}

export default MainContent