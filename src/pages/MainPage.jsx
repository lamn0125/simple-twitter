import { UserNavbar, PopularList } from 'components/Layout'
import { TweetModal }  from 'components/Modal'
import MainContent from 'components/Main/MainContent'
import { useTweets } from 'contexts/TweetContext'

const MainPage = () => {
  const { tweets, tweetInputValue, tweetErrorMsg, tweetModalShow, toggleTweetModal, handleTweetInput, handleTweetBtn } = useTweets()

  return(
    <div className="container">
      <div className="d-flex">
        <div className="nav-container d-flex flex-column justify-content-between pr-4">
          <UserNavbar 
            toggleTweetModal={toggleTweetModal}
          />
        </div>
        <div className="main-container">
          <MainContent
            toggleTweetModal={toggleTweetModal}
            tweets={tweets}
          />
        </div>
        <div className="pl-4">
          <PopularList />
        </div>
      </div>

      <TweetModal 
        isModalShow={tweetModalShow}
        toggleTweetModal={toggleTweetModal}
        inputValue={tweetInputValue}
        errorMsg={tweetErrorMsg}
        handleTweetInput={handleTweetInput}
        handleTweetBtn={handleTweetBtn}
      />
      {/* <ReplyModal /> */}
    </div>
  )
}

export default MainPage