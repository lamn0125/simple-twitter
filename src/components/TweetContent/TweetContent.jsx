import Header from 'components/TweetContent/Header'
import TweetPost from 'components/TweetContent/TweetPost'
import ReplyCollection from 'components/TweetContent/ReplyCollection'

const TweetContent = ({ handleReplyModalShow }) => {
  return(
    <div>
      <Header />
      <TweetPost 
        handleReplyModalShow={handleReplyModalShow}
      />
      <ReplyCollection />
    </div>
  )
}

export default TweetContent