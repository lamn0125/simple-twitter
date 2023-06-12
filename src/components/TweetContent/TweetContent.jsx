import Header from 'components/TweetContent/Header'
import TweetPost from 'components/TweetContent/TweetPost'
import ReplyCollection from 'components/TweetContent/ReplyCollection'

const TweetContent = ({ isModalShow, handleShow, handleClose }) => {
  return(
    <div>
      <Header />
      <TweetPost 
        isModalShow={isModalShow}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <ReplyCollection />
    </div>
  )
}

export default TweetContent