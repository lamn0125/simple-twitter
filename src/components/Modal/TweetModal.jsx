import { Button, Modal, InputGroup, Form } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from 'assets/icons/icon_tweet_xs_close@x1.svg'
import UserAvatar from 'assets/images/Photo@1x.svg'

const TweetModal = ({ isModalShow, handleClose }) => {
  return(   
    <Modal show={isModalShow} onHide={handleClose}>
      <Modal.Header>
        <CloseIcon className="cursor-pointer"
          onClick={handleClose} 
        />  
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex">
          <div>
            <a href="/">
              <img src={UserAvatar} alt="avatar" />
            </a>               
          </div>
          <InputGroup>
            <Form.Control as="textarea" aria-label="With textarea" placeholder="有什麼新鮮事？" />
          </InputGroup>            
        </div> 
      </Modal.Body>

      <Modal.Footer>
        <Button className="btn tweet-sm-btn btn-brand">推文</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TweetModal