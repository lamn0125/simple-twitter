import UserAvatar from 'assets/images/Photo@1x.svg'

const TweetInput = () => {
  return(
    <div className="container-fluid py-3 px-4 input-container">
      <div className="row">
        <div className="col-md d-flex align-items-center mb-3">
          <img src={UserAvatar} alt="avatar" />
          <h5 className="ml-2 text-secondary">有什麼新鮮事？</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md d-flex justify-content-md-end">
          <button className="btn tweet-sm-btn">推文</button>
        </div>
      </div>
    </div>
  )
}

export default TweetInput