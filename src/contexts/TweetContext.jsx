import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { getTweets, createTweet } from 'api/tweets'
// import { useAuth } from './AuthContext'   // 登入驗證

// 初始 TweetsContext
const defaultTweetsContext = {}
const TweetsContext = createContext(defaultTweetsContext)
export const useTweets = () => useContext(TweetsContext)

// 管理 TweetsContext 功能
export const TweetsProvider = ({ children }) => {
  // const { isAuthenticated } = useAuth()                        // 登入驗證的狀態
  const [tweets, setTweets] = useState([])                     // 所有的tweets 的狀態
  const [tweetModalShow, setTweetModalShow] = useState(false)  // Tweet Modal顯示的狀態
  const [tweetInputValue, setTweetInputValue] = useState('')   // Tweet Modal輸入內容的狀態
  const [tweetErrorMsg, setTweetErrorMsg] = useState('')       // Tweet Modal錯誤訊息的狀態

  // Async function: 取得 tweets
  const getTweetsAsync = async () => {
    try {
      const tweets = await getTweets()
      setTweets(tweets)
    } catch (error) {
      console.error(error)
    }
  }

  // 切換 TweetModal 
  const toggleTweetModal = useCallback(() => {
    setTweetModalShow((prev) => !prev)
  }, []);

  // 處理: TweetModal 的輸入欄位，做「輸入驗證、儲存 InputValue 與 ErrorMsg 狀態」
  const handleTweetInput = (e) => {
    let inputText = e.target.value
    // 儲存 tweetInputValue 狀態
    setTweetInputValue(inputText)
    // 儲存 tweetErrorMsg 狀態
    if (inputText.length === 0) {
      setTweetErrorMsg('內容不可空白')
    } else if (inputText.length > 140) {
      setTweetErrorMsg('字數不可超過140字')
    } else {
      setTweetErrorMsg('')
    }
  }

  // 處理: TweetModal 的推文按紐
  const handleTweetBtn = async () => {
    // 若輸入的內容目前有錯誤，或輸入空白值，則不給執行下方功能
    if (tweetErrorMsg) {
      return
    } else if (tweetInputValue.trim().length === 0) {
      setTweetErrorMsg('內容不可空白')
      return
    }

    try {
      // 儲存: 推文資料至DB
      await createTweet({description: tweetInputValue})
      // 取得: 更新的 Tweets 資料
      await getTweetsAsync()
      // 清空 inputValue 跟 errorMsg 狀態
      setTweetInputValue('')
      setTweetErrorMsg('')
      // 關閉 TweetModal
      toggleTweetModal()
    } catch (error) {
      console.error(error)
    }
  }

  //==============================================
  // 取得所有的 tweets 
  useEffect(() => {
    getTweetsAsync()
  }, [])

  // // 依照(登入驗證)，以取得所有的 tweets 
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     getTweetsAsync()
  //   } else {
  //     setTweets([])
  //   }
  // }, [isAuthenticated])
  //==============================================

  return (
    <TweetsContext.Provider
      value={{
        tweets, 
        setTweets, 
        tweetModalShow, 
        setTweetModalShow, 
        tweetInputValue, 
        setTweetInputValue, 
        tweetErrorMsg, 
        setTweetErrorMsg,
        toggleTweetModal, 
        handleTweetInput, 
        handleTweetBtn, 
      }}
    >
      {children}
    </TweetsContext.Provider>
  )
}