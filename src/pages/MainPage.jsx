import { useState } from 'react'
import { UserNavbar, PopularList } from 'components/Layout'
import { TweetModal, ReplyModal }  from 'components/Modal'
import MainContent from 'components/Main/MainContent'

const MainPage = () => {
  /// TweetModal視窗顯示
  const [tweetModalShow, setTweetModalShow] = useState(false)
  const handleTweetModalShow = () => setTweetModalShow(true)
  const handleTweetModalClose = () => setTweetModalShow(false)

  // ReplyModal視窗顯示
  const [replyModalShow, setReplyModalShow] = useState(false)
  const handleReplyModalShow = () => setReplyModalShow(true)
  const handleReplyModalClose = () => setReplyModalShow(false)

  return(
    <div className="container">
      <div className="d-flex">
        <div className="nav-container d-flex flex-column justify-content-between pr-4">
          <UserNavbar 
            handleTweetModalShow={handleTweetModalShow}
          />
        </div>
        <div className="main-container">
          <MainContent
            handleTweetModalShow={handleTweetModalShow}
            handleReplyModalShow={handleReplyModalShow}
          />
        </div>
        <div className="pl-4">
          <PopularList />
        </div>
      </div>

      <TweetModal 
        isModalShow={tweetModalShow}
        handleClose={handleTweetModalClose}
      />
      <ReplyModal 
        isModalShow={replyModalShow}
        handleClose={handleReplyModalClose}
      />
    </div>
  )
}

export default MainPage