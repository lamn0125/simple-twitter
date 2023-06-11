import UserAvatar from 'assets/images/Photo@1x.svg'

const TweetInput = () => {
  return(
    <div className="input-border d-flex py-3 px-4">
      <a href="/">
        <img src={UserAvatar} alt="avatar" />
      </a> 
      <div className="w-100">
        <h5 className="ml-2 py-3 text-secondary">有什麼新鮮事？</h5> 
        <div className="d-flex justify-content-end">
          <button className="btn tweet-sm-btn btn-brand">推文</button>
        </div>     
      </div>    
    </div> 
  )
}

export default TweetInput