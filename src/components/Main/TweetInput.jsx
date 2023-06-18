import { Button } from 'react-bootstrap'
import UserAvatar from 'assets/images/Photo@1x.svg'

const TweetInput = ({ toggleTweetModal }) => {
  return(
    <div className="input-border d-flex py-3 px-4">
      <div>
        <a href="/">
          <img src={UserAvatar} alt="avatar" />
        </a> 
        <div className="h-50" onClick={toggleTweetModal}></div>
      </div>
      <div className="w-100" onClick={toggleTweetModal}>
        <h5 className="ml-2 py-3 text-secondary">有什麼新鮮事？</h5> 
        <div className="d-flex justify-content-end">
          <Button className="btn tweet-sm-btn btn-brand" onClick={toggleTweetModal}>推文</Button>
        </div>     
      </div>    
    </div> 
  )
}

export default TweetInput