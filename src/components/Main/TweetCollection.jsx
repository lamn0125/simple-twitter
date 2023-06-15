import TweetItem from 'components/Main/TweetItem'

const TweetCollection = ({ handleReplyModalShow, tweets }) => {
  return(
    <div>
      <TweetItem
        handleReplyModalShow={handleReplyModalShow}
        tweets={tweets}
      />
    </div>
  )
}

export default TweetCollection