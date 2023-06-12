import OtherUserAvatar from 'assets/images/img@1x.svg'

const ReplyItem = () => {
  return(
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
              <a href="/" className="account-name fz-base-bold mr-2">Devon Lane</a>
              <span className="fz-sm text-secondary">@devon_lane．12小時</span>
            </div>
             
            <div className="">
              <div className="mb-2">            
                <span className="fz-sm text-secondary mr-1">回覆</span>
                <a href="/" className="tag fz-sm">@apple</a>
              </div>
              <div className="card-text fz-base">
                former apple engineer shares a simple DIY fix to seal your surgical mask
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
              <a href="/" className="account-name fz-base-bold mr-2">Jane Cathy</a>
              <span className="fz-sm text-secondary">@iamjane1999・3 小時</span>
            </div>
             
            <div className="">
              <div className="mb-2">            
                <span className="fz-sm text-secondary mr-1">回覆</span>
                <a href="/" className="tag fz-sm">@apple</a>
              </div>
              <div className="card-text fz-base">
                Michelin Challenges Creatives to Upcycle
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
              <a href="/" className="account-name fz-base-bold mr-2">Marvin McKinney</a>
              <span className="fz-sm text-secondary">@MMcK・12 小時</span>
            </div>
             
            <div className="">
              <div className="mb-2">            
                <span className="fz-sm text-secondary mr-1">回覆</span>
                <a href="/" className="tag fz-sm">@apple</a>
              </div>
              <div className="card-text fz-base">
                Use your options to stand out from the crowd | Companies and Creatives Profiles
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
              <a href="/" className="account-name fz-base-bold mr-2">Leslie Alexander</a>
              <span className="fz-sm text-secondary">@LeslieAlex・12 小時</span>
            </div>
             
            <div className="">
              <div className="mb-2">            
                <span className="fz-sm text-secondary mr-1">回覆</span>
                <a href="/" className="tag fz-sm">@apple</a>
              </div>
              <div className="card-text fz-base">
                LE speakers by Braun Audio
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
              <span className="fz-sm text-secondary">@JaneCoooo・12 小時</span>
            </div>
             
            <div className="">
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
  )
}

export default ReplyItem