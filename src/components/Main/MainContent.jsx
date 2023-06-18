import Header from 'components/Main/Header'
import TweetInput from 'components/Main/TweetInput'
import TweetCollection from 'components/Main/TweetCollection'

const MainContent = ({ toggleTweetModal, handleReplyModalShow, tweets }) => {
  return(
    <>
      <Header />
      <TweetInput 
        toggleTweetModal={toggleTweetModal}
      />
      <TweetCollection 
        handleReplyModalShow={handleReplyModalShow}
        tweets={tweets}
      />
    </>
  )
}

export default MainContent