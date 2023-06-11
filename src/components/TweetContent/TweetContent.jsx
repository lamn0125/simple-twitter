import Header from 'components/TweetContent/Header'
import TweetPost from 'components/TweetContent/TweetPost'
import ReplyCollection from 'components/TweetContent/ReplyCollection'

const TweetContent = () => {
  return(
    <div>
      <Header />
      <TweetPost />
      <ReplyCollection />
    </div>
  )
}

export default TweetContent