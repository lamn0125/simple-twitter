import TweetItem from 'components/Main/TweetItem'

const TweetCollection = ({ handleReplyModalShow, tweets }) => {
  // console.log(tweets)
  return(
    <div>
      {tweets.map((tweet) => {
        return (
          <TweetItem
            handleReplyModalShow={handleReplyModalShow}
            tweet={tweet}
          />
        )
      })}
    </div>
  )
}

export default TweetCollection