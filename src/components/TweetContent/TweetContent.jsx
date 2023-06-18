import Header from 'components/TweetContent/Header'
import TweetPost from 'components/TweetContent/TweetPost'
import ReplyCollection from 'components/TweetContent/ReplyCollection'

const TweetContent = ({ handleReplyModalShow, handleBackClick, tweet, distance, comments, tweetAccount }) => {
  return(
    <div>
      <Header 
        handleBackClick={handleBackClick}
      />
      <TweetPost 
        handleReplyModalShow={handleReplyModalShow}
        tweet={tweet}
        distance={distance}
      />
      <ReplyCollection 
        tweetAccount={tweetAccount}
        comments={comments}     
      />
    </div>
  )
}

export default TweetContent