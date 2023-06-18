import { Button, Modal, InputGroup, Form } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from 'assets/icons/icon_tweet_xs_close@x1.svg'
import UserAvatar from 'assets/images/Photo@1x.svg'

const TweetModal = ({ isModalShow, toggleTweetModal, inputValue, errorMsg, handleTweetInput, handleTweetBtn }) => {
  return(   
    <Modal show={isModalShow} onHide={toggleTweetModal}>
      <Modal.Header>
        <CloseIcon className="cursor-pointer"
          onClick={toggleTweetModal} 
        />  
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex">
          <div className="mr-2">
            <a href="/">
              <img src={UserAvatar} alt="avatar" />
            </a>               
          </div>
          <InputGroup>
            <Form.Control as="textarea" aria-label="With textarea" placeholder="有什麼新鮮事？" 
              value={inputValue}
              onChange={handleTweetInput}
            />
          </InputGroup>            
        </div> 
      </Modal.Body>

      <Modal.Footer>
        {errorMsg && <p className="errMsg mr-3">{errorMsg}</p>}
        <Button className="btn tweet-sm-btn btn-brand" onClick={handleTweetBtn}>推文</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TweetModal