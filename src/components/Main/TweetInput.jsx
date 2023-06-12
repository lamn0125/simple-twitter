import { Button, Modal } from 'react-bootstrap'
import UserAvatar from 'assets/images/Photo@1x.svg'
import { ReactComponent as CloseIcon } from 'assets/icons/icon_tweet_xs_close@x1.svg'

const TweetInput = ({ isModalShow, handleShow, handleClose }) => {
  return(
    <>
      <div className="input-border d-flex py-3 px-4">
        <a href="/">
          <img src={UserAvatar} alt="avatar" />
        </a> 
        <div className="w-100" onClick={handleShow}>
          <h5 className="ml-2 py-3 text-secondary">有什麼新鮮事？</h5> 
          <div className="d-flex justify-content-end">
            <Button className="btn tweet-sm-btn btn-brand" onClick={handleShow}>推文</Button>
          </div>     
        </div>    
      </div> 

      <Modal show={isModalShow} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
            <CloseIcon className="cursor-pointer"
              onClick={handleClose} 
            />  
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TweetInput