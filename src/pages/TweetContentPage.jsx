import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getComments , createTweet } from 'api/tweets'
import { UserNavbar, PopularList } from 'components/Layout'
import { TweetModal, ReplyModal }  from 'components/Modal'
import TweetContent from 'components/TweetContent/TweetContent'

const TweetContentPage = () => {
  // Modal輸入內容
  const [inputValue, setInputValue] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const [tweets, setTweets] = useState([])
  const [comments, setComments] = useState([])
  const navigate = useNavigate()

  // 將TweetItem的tweet資料透過navigate傳過來，用於點擊的推文內容
  const location = useLocation()
  const tweet = location.state.tweet
  const distance = location.state.distance

  const tweetId = tweet.id
  const tweetAccount = tweet.User.account

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

  // 推文驗證
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
  
  // 新增推文
  const handleTweetBtn = async () => {
    if (inputValue.trim().length === 0) {
      setErrorMsg('內容不可空白')
      return
    }

    try {
      // 推文資料存入後端資料庫
      const data = await createTweet({
        description: inputValue,
      })

      setTweets((prevTweets) => {
        return [
          {
            id: data.id,
            userId: data.userId,
            description: data.description,
            createdAt: data.createdAt
          },
          ...prevTweets
        ]
      })
      setInputValue('')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // 取得一筆推文內的所有留言，透過點擊推文中的tweetId找到對應的回覆資料
    const getCommentAsync = async () => {
      try {
        const comments = await getComments(tweetId)

        setComments(comments.map((comment) => (
          {...comment}
          
        )))
      } catch (error) {
        console.error(error)
      }
    }
    getCommentAsync()
  }, [])

  // 返回首頁
  const handleBackClick = () => {
    navigate('/main')
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
          <TweetContent 
            handleTweetModalShow={handleTweetModalShow}
            handleReplyModalShow={handleReplyModalShow}    
            handleBackClick={handleBackClick} 
            tweet={tweet}  
            distance={distance}  
            tweetAccount={tweetAccount}
            comments={comments}
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

export default TweetContentPage