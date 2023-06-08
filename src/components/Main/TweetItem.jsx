import OtherUserAvatar from 'assets/images/img@1x.svg'
import { ReactComponent as ReplyIcon} from 'assets/icons/Property 2=outlined, Property 3=reply@1x.svg'
import { ReactComponent as LikeIcon } from 'assets/icons/Property 2=outlined, Property 3=like@1x.svg'
import { Card, Button } from 'react-bootstrap'

const TweetItem = () => {
  return(
    <Card>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <img src={OtherUserAvatar} alt="avatar" />
          <div className="card-body">
            <div className="card-title">Apple</div>
            <span>@apple</span>
            <div className="card-text">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
            </div>
            <div>
              <Button><ReplyIcon />13</Button>
              <Button><LikeIcon />76</Button>
            </div>
          </div>
        </li> 
      </ul>
    </Card>
  )
}

export default TweetItem