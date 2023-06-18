import { Button } from 'react-bootstrap'
import { ReactComponent as ReplyIcon} from 'assets/icons/Property 2=outlined, Property 3=reply@1x.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/Property 2=outlined, Property 3=like@1x.svg'
import styles from 'components/TweetContent/TweetPost.module.scss'

const TweetPost = ({ handleReplyModalShow, tweet, distance }) => {
  return(
    <div className="border-y-container pt-3 px-3">
      <div className="d-flex mb-2">
        <a href="/">
          <img src={tweet.User.avatar} className="avatar" alt="avatar" />
        </a>
        <div className="ml-2">
          <a href="/" className="account-name fz-base-bold">{tweet.User.name}</a>
          <div className="fz-sm text-secondary">@{tweet.User.account}</div>
        </div>
      </div>                
      <div className={styles.tweetText}>
        {tweet.description}
      </div>
      <div className="fz-sm-bold text-secondary my-2">{distance}</div>
      <div className="border-y-container d-flex py-3">
        <div className={`${styles.recordNum} mr-4`}>{tweet.replyCount}<span className="text-secondary"> 回覆</span></div>
        <div className={styles.recordNum}>{tweet.numberLike}<span className="text-secondary"> 喜歡次數</span></div>
      </div> 
      <div className="btn-group reply-btn">
        <Button className="btn pl-0" onClick={handleReplyModalShow}>
          <ReplyIcon className="text-secondary" />
        </Button>
        <Button className="btn">
          <LikeIcon className="text-secondary" />
        </Button>
      </div>
    </div>
  )
}
export default TweetPost
