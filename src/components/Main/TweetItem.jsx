import OtherUserAvatar from 'assets/images/img@1x.svg'
import { ReactComponent as ReplyIcon} from 'assets/icons/icon_tweet_xs_reply@1x.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/icon_tweet_xs_like@1x.svg'

const TweetItem = () => {
  return(
    <ul className="list-group list-group-flush">
      <li className="list-group-item py-3 px-4 cursor-pointer">
        <div className="d-flex align-items-start">

          <div className="mr-2">
            <a href="/">
              <img src={OtherUserAvatar} alt="avatar" />
            </a>
          </div>

          <div className="flex-grow-1">
            <div className="card-body p-0">
              <div className="card-title mb-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">Apple</a>
                <span className="fz-sm text-secondary">@apple．3小時</span>
              </div>
              <div className="card-text fz-base">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
              </div>
              <div>
                <button className="btn p-0 mr-3">
                  <ReplyIcon className="text-secondary" />
                  <span className="reply-icon ml-2">
                    13
                  </span>
                </button>
                <button className="btn p-0 ml-4">
                  <LikeIcon className="text-secondary" />
                  <span className="like-icon ml-2">
                    76
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> 
      </li>

      <li className="list-group-item py-3 px-4 cursor-pointer">
        <div className="d-flex align-items-start">

          <div className="mr-2">
            <a href="/">
              <img src={OtherUserAvatar} alt="avatar" />
            </a>
          </div>

          <div className="flex-grow-1">
            <div className="card-body p-0">
              <div className="card-title mb-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">Jane Cathy</a>
                <span className="fz-sm text-secondary">@iamjane1999．3小時</span>
              </div>
              <div className="card-text fz-base">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
              </div>
              <div>
                <button className="btn p-0 mr-3">
                  <ReplyIcon className="text-secondary" />
                  <span className="reply-icon ml-2">
                    13
                  </span>
                </button>
                <button className="btn p-0 ml-4">
                  <LikeIcon className="text-secondary" />
                  <span className="like-icon ml-2">
                    76
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> 
      </li>

      <li className="list-group-item py-3 px-4 cursor-pointer">
        <div className="d-flex align-items-start">

          <div className="mr-2">
            <a href="/">
              <img src={OtherUserAvatar} alt="avatar" />
            </a>
          </div>

          <div className="flex-grow-1">
            <div className="card-body p-0">
              <div className="card-title mb-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">Apple</a>
                <span className="fz-sm text-secondary">@apple．3小時</span>
              </div>
              <div className="card-text fz-base">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
              </div>
              <div>
                <button className="btn p-0 mr-3">
                  <ReplyIcon className="text-secondary" />
                  <span className="reply-icon ml-2">
                    13
                  </span>
                </button>
                <button className="btn p-0 ml-4">
                  <LikeIcon className="text-secondary" />
                  <span className="like-icon ml-2">
                    76
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> 
      </li>

      <li className="list-group-item py-3 px-4 cursor-pointer">
        <div className="d-flex align-items-start">

          <div className="mr-2">
            <a href="/">
              <img src={OtherUserAvatar} alt="avatar" />
            </a>
          </div>

          <div className="flex-grow-1">
            <div className="card-body p-0">
              <div className="card-title mb-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">Apple</a>
                <span className="fz-sm text-secondary">@apple．3小時</span>
              </div>
              <div className="card-text fz-base">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
              </div>
              <div>
                <button className="btn p-0 mr-3">
                  <ReplyIcon className="text-secondary" />
                  <span className="reply-icon ml-2">
                    13
                  </span>
                </button>
                <button className="btn p-0 ml-4">
                  <LikeIcon className="text-secondary" />
                  <span className="like-icon ml-2">
                    76
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> 
      </li>
    </ul>
  )
}

export default TweetItem