import { useState } from 'react'
import { UserNavbar, PopularList } from 'components/Layout'
import TweetContent from 'components/TweetContent/TweetContent'

const TweetContentPage = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return(
    <div className="container">
      <div className="d-flex">
        <div className="nav-container d-flex flex-column justify-content-between pr-4">
          <UserNavbar 
            isModalShow={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
        </div>
        <div className="main-container">
          <TweetContent 
            isModalShow={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
        </div>
        <div className="pl-4">
          <PopularList />
        </div>
      </div>
    </div>
  )
}

export default TweetContentPage