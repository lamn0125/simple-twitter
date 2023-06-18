import ReplyItem from 'components/TweetContent/ReplyItem'

const ReplyCollection = ({ tweet, distance, comments, tweetAccount }) => {

  return(
    <ul className="list-group list-group-flush">
      {comments.map((comment) => {
        return (
          <ReplyItem    
            key={comment.id} 
            tweetAccount={tweetAccount}
            comment={comment}
          />
        )
      })}  
    </ul>
  )
}

export default ReplyCollection