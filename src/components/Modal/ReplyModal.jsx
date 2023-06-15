import { Button, Modal, InputGroup, Form, Card } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from 'assets/icons/icon_tweet_xs_close@x1.svg'
import UserAvatar from 'assets/images/Photo@1x.svg'
import OtherUserAvatar from 'assets/images/img@1x.svg'
import styles from 'components/Modal/ReplyModal.module.scss'

const ReplyModal = ({ isModalShow, handleClose, inputValue, errorMsg, handleTweetInput, handleTweetBtn }) => {
  return(
    <Modal show={isModalShow} onHide={handleClose}>
      <Modal.Header>
        <CloseIcon className="cursor-pointer"
          onClick={handleClose} 
        />  
      </Modal.Header>

      <Modal.Body className={styles.modalBody}>
        <div className="d-flex">
          <div className="mr-2">
            <a href="/">
              <img src={OtherUserAvatar} alt="avatar" />
            </a>           
          </div>  
          <Card className="border-0">
            <Card.Title className="mb-2">
              <a href="/" className="account-name fz-base-bold mr-2">Apple</a>
              <span className="fz-sm text-secondary">@apple．3小時</span>
            </Card.Title>
             
            <Card.Body className="p-0">   
              <Card.Text className="fz-base mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. 
              </Card.Text>  
              <div className="mb-2">            
                <span className="fz-sm text-secondary mr-1">回覆</span>
                <a href="/" className="tag fz-sm">@Mitsubishi</a>
              </div>
            </Card.Body>
          </Card>       
        </div> 

        <div className={styles.modalLine}></div>

        <div className="d-flex mt-3">
          <div className="mr-2">
            <a href="/">
              <img src={UserAvatar} alt="avatar" />
            </a>               
          </div>
          <InputGroup>
            <Form.Control as="textarea" aria-label="With textarea" placeholder="推你的回覆" 
              value={inputValue}
              onChange={handleTweetInput}
            />
          </InputGroup>            
        </div> 
      </Modal.Body>

      <Modal.Footer>
        {errorMsg && <p className="errMsg mr-3">{errorMsg}</p>}
        <Button className="btn tweet-sm-btn btn-brand" onClick={handleTweetBtn}>回覆</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ReplyModal