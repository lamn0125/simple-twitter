import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import OtherUserAvatar from 'assets/images/img@1x.svg'
import { ReactComponent as ReplyIcon} from 'assets/icons/icon_tweet_xs_outlined_reply@1x.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/icon_tweet_xs_outlined_like@1x.svg'
import { ReactComponent as LikedIcon } from 'assets/icons/icon_tweet_xs_filled_like@1x.svg'

const FeatureList = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab"
      fill
    >
      <Tab eventKey="home" title="推文">
        <ul className="list-group list-group-flush">
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">John Doe</a>
                  <span className="fz-sm text-secondary">@heyjohn．3小時</span>
                </div>
                <div className="card-text fz-base">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </div>
                <div className="btn-group">
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
          </li>
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">John Doe</a>
                  <span className="fz-sm text-secondary">@heyjohn．3小時</span>
                </div>
                <div className="card-text fz-base">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </div>
                <div className="btn-group">
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
          </li>
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>      
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">John Doe</a>
                  <span className="fz-sm text-secondary">@heyjohn．3小時</span>
                </div>
                <div className="card-text fz-base">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </div>
                <div className="btn-group">
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
          </li>
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
                <div className="card-body p-0">
                  <div className="card-title mb-2">
                    <a href="/" className="account-name fz-base-bold mr-2">John Doe</a>
                    <span className="fz-sm text-secondary">@heyjohn．3小時</span>
                  </div>
                  <div className="card-text fz-base">
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                  </div>
                  <div className="btn-group">
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
          </li>
        </ul>
      </Tab>
      <Tab eventKey="profile" title="回覆">
        <ul className="list-group list-group-flush">
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">John Doe</a>
                  <span className="fz-sm text-secondary">@apple．3小時</span>
                </div>
                
                <div>
                  <div className="mb-2">            
                    <span className="fz-sm text-secondary mr-1">回覆</span>
                    <a href="/" className="tag fz-sm">@apple</a>
                  </div>
                  <div className="card-text fz-base">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  </div>  
                </div>
              </div>     
            </div> 
          </li>
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">John Doe</a>
                  <span className="fz-sm text-secondary">@apple・3 小時</span>
                </div>
                
                <div>
                  <div className="mb-2">            
                    <span className="fz-sm text-secondary mr-1">回覆</span>
                    <a href="/" className="tag fz-sm">@apple</a>
                  </div>
                  <div className="card-text fz-base">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  </div>  
                </div>
              </div>     
            </div> 
          </li>
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">John Doe</a>
                  <span className="fz-sm text-secondary">@apple・3 小時</span>
                </div>
                
                <div>
                  <div className="mb-2">            
                    <span className="fz-sm text-secondary mr-1">回覆</span>
                    <a href="/" className="tag fz-sm">@apple</a>
                  </div>
                  <div className="card-text fz-base">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  </div>  
                </div>
              </div>     
            </div> 
          </li>
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">John Doe</a>
                  <span className="fz-sm text-secondary">@apple・3 小時</span>
                </div>
                
                <div>
                  <div className="mb-2">            
                    <span className="fz-sm text-secondary mr-1">回覆</span>
                    <a href="/" className="tag fz-sm">@apple</a>
                  </div>
                  <div className="card-text fz-base">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                  </div>  
                </div>
              </div>     
            </div> 
          </li>
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">Jane Cooper</a>
                  <span className="fz-sm text-secondary">@JaneCoooo・3 小時</span>
                </div>
                
                <div>
                  <div className="mb-2">            
                    <span className="fz-sm text-secondary mr-1">回覆</span>
                    <a href="/" className="tag fz-sm">@apple</a>
                  </div>
                  <div className="card-text fz-base">
                    Outdoor urinal designers offer solutions to pandemic public toilet problem
                  </div>  
                </div>
              </div>     
            </div> 
          </li>
        </ul>
      </Tab>
      <Tab eventKey="longer-tab" title="喜歡的內容">
        <ul className="list-group list-group-flush">
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">Apple</a>
                  <span className="fz-sm text-secondary">@apple．3小時</span>
                </div>
                <div className="card-text fz-base">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </div>
                <div className="btn-group">
                  <button className="btn p-0 mr-3">
                    <ReplyIcon className="text-secondary" />
                    <span className="reply-icon ml-2">
                      13
                    </span>
                  </button>
                  <button className="btn p-0 ml-4">
                    <LikedIcon className="text-secondary" />
                    <span className="like-icon ml-2">
                      76
                    </span>
                  </button>
                </div>
              </div>
            </div> 
          </li>
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">Apple</a>
                  <span className="fz-sm text-secondary">@apple．3小時</span>
                </div>
                <div className="card-text fz-base">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </div>
                <div className="btn-group">
                  <button className="btn p-0 mr-3">
                    <ReplyIcon className="text-secondary" />
                    <span className="reply-icon ml-2">
                      13
                    </span>
                  </button>
                  <button className="btn p-0 ml-4">
                    <LikedIcon className="text-secondary" />
                    <span className="like-icon ml-2">
                      76
                    </span>
                  </button>
                </div>
              </div> 
            </div> 
          </li>
          <li className="list-group-item py-3 px-4 cursor-pointer">
            <div className="d-flex">
              <div className="mr-2">
                <a href="/">
                  <img src={OtherUserAvatar} alt="avatar" />
                </a>
              </div>      
              <div className="card-body p-0">
                <div className="card-title mb-2">
                  <a href="/" className="account-name fz-base-bold mr-2">Apple</a>
                  <span className="fz-sm text-secondary">@apple．3小時</span>
                </div>
                <div className="card-text fz-base">
                  Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                </div>
                <div className="btn-group">
                  <button className="btn p-0 mr-3">
                    <ReplyIcon className="text-secondary" />
                    <span className="reply-icon ml-2">
                      13
                    </span>
                  </button>
                  <button className="btn p-0 ml-4">
                    <LikedIcon className="text-secondary" />
                    <span className="like-icon ml-2">
                      76
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Tab>
    </Tabs>
  )
}

export default FeatureList