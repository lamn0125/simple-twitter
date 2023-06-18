import TweetItem from 'components/Main/TweetItem'

const TweetCollection = ({ handleReplyModalShow, tweets }) => {
  return(
    <ul className="list-group list-group-flush">
      {tweets
        // 因有缺資料，為避免報錯加上filter
        .filter((tweet) => tweet.User && tweet.User.avatar)
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