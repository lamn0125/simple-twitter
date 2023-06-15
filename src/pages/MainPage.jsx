import { useState } from 'react'
import { UserNavbar, PopularList } from 'components/Layout'
import { TweetModal, ReplyModal }  from 'components/Modal'
import MainContent from 'components/Main/MainContent'

const MainPage = () => {
  // Modal輸入內容
  const [inputValue, setInputValue] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  /// TweetModal視窗顯示
  const [tweetModalShow, setTweetModalShow] = useState(false)
  const handleTweetModalShow = () => setTweetModalShow(true)
  const handleTweetModalClose = () => {
    setTweetModalShow(false)
    setInputValue('')
    setErrorMsg('')
  }

  // ReplyModal視窗顯示
  const [replyModalShow, setReplyModalShow] = useState(false)
  const handleReplyModalShow = () => setReplyModalShow(true)
  const handleReplyModalClose = () => {
    setReplyModalShow(false)
    setInputValue('')
    setErrorMsg('')
  }

  // 推文輸入驗證
  const handleTweetInput = (e) => {
    setInputValue(e.target.value)

    if (e.target.value.length === 0) {
      setErrorMsg('內容不可空白')
    } else if (e.target.value.length > 140) {
      setErrorMsg('字數不可超過140字')
    } else {
      setErrorMsg('')
    }

  }

  // 點擊推文按鈕
  const handleTweetBtn = () => {
    if (inputValue.trim().length === 0) {
      setErrorMsg('內容不可空白')
    }
  }


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
        value={inputValue}
        errorMsg={errorMsg}
        handleTweetInput={handleTweetInput}
        handleTweetBtn={handleTweetBtn}
      />
      <ReplyModal 
        isModalShow={replyModalShow}
        handleClose={handleReplyModalClose}
        value={inputValue}
        errorMsg={errorMsg}
        handleTweetInput={handleTweetInput}
        handleTweetBtn={handleTweetBtn}
      />
    </div>
  )
}

export default MainPage