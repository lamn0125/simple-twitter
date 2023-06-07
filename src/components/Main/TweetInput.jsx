import UserAvatar from 'assets/images/Photo@1x.svg'
import { Button } from 'react-bootstrap'

const TweetInput = () => {
  return(
    <div>
      <img src={UserAvatar} alt="avatar" />
      <span>有什麼新鮮事？</span>
      <Button variant="primary">推文</Button>
    </div>
  )
}

export default TweetInput