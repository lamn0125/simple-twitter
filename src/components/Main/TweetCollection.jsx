import TweetItem from 'components/Main/TweetItem'

const TweetCollection = ({ handleReplyModalShow, tweets }) => {
  return(
    <ul className="list-group list-group-flush">
      {tweets
        .map((tweet) => {
          return (
            <TweetItem
              key={tweet.id}
              handleReplyModalShow={handleReplyModalShow}
              tweet={tweet}
            />
          )
        })}
    </ul>
  )
}

export default TweetCollection