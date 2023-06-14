import TweetItem from 'components/Main/TweetItem'

const TweetCollection = ({ handleReplyModalShow }) => {
  return(
    <div>
      <TweetItem
        handleReplyModalShow={handleReplyModalShow}
      />
    </div>
  )
}

export default TweetCollection