import { ReactComponent as ReplyIcon} from 'assets/icons/icon_tweet_xs_outlined_reply@1x.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/icon_tweet_xs_outlined_like@1x.svg'
import { formatDistanceToNow } from 'date-fns'
import zhTW from 'date-fns/locale/zh-TW'

const TweetItem = ({ handleReplyModalShow, tweet }) => {
  // 時間格式
  const tweetDate = new Date(tweet.createdAt)
  const distance = formatDistanceToNow(tweetDate, { includeSeconds: true, locale: zhTW })

  return(
    <li className="list-group-item py-3 px-4 cursor-pointer">
      <div className="d-flex">
        <div className="mr-2">
          <a href="/">
            <img src={tweet.User.avatar} className="avatar" alt="avatar" />
          </a>
        </div>
        <div className="card-body p-0">
          <div className="card-title mb-2">
            <a href="/" id={tweet.UserId} className="account-name fz-base-bold mr-2">{tweet.User.name}</a>
            <span className="fz-sm text-secondary">@{tweet.User.account}．{distance}</span>
          </div>
          <div className="card-text fz-base">
            {tweet.description}
          </div>
          <div className="btn-group">
            <button className="btn p-0 mr-3" onClick={handleReplyModalShow}>
              <ReplyIcon className="text-secondary" />
              <span className="reply-icon ml-2">
                {tweet.repliesCount}
              </span>
            </button>
            <button className="btn p-0 ml-4">
              <LikeIcon className="text-secondary" />
              <span className="like-icon ml-2">
                {tweet.numberLike}
              </span>
            </button>
          </div>
        </div>
      </div> 
    </li>
  )
}

export default TweetItem