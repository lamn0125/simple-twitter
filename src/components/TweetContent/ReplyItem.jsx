import { formatDistanceToNow } from 'date-fns'
import zhTW from 'date-fns/locale/zh-TW'

const ReplyItem = ({ tweetAccount ,comment }) => {
  // comment時間格式
  const commentDate = new Date(comment.createdAt)
  const commentDistance = formatDistanceToNow(commentDate, { includeSeconds: true, locale: zhTW })

  return(
    <li id={comment.id} className="list-group-item py-3 px-4 cursor-pointer">
      <div className="d-flex">
        <div className="mr-2">
          <a href="/">
            <img src={comment.User.avatar} className="avatar" alt="avatar" />
          </a>
        </div>
        <div className="card-body p-0">
          <div className="card-title mb-2">
            <a href="/" id={comment.userId} className="account-name fz-base-bold mr-2">{comment.User.name}</a>
            <span className="fz-sm text-secondary">@{comment.User.account}．{commentDistance}</span>
          </div>
            
          <div>
            <div className="mb-2">            
              <span className="fz-sm text-secondary mr-1">回覆</span>
              <a href="/" className="tag fz-sm">@{tweetAccount}</a>
            </div>
            <div className="card-text fz-base">
              {comment.comment}
            </div>  
          </div>
        </div>     
      </div> 
    </li>
  )
}

export default ReplyItem