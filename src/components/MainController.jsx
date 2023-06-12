import { useState } from 'react'
import { UserNavbar, PopularList } from 'components/Layout'
import { MainContent } from 'components/Main'
import { TweetContent } from 'components/TweetContent'

const MainController = () => {
  // 控制Modal視窗是否顯示
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-lg-2 d-flex flex-column justify-content-between pl-0 pr-4">
          <UserNavbar 
            isModalShow={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
        </div>
        <div className="main-border col-md-7 col-lg-7 p-0">
          <MainContent
            isModalShow={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
          <TweetContent 
            isModalShow={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
        </div>
        <div className="col-md-3 col-lg-3 mt-3 pr-0 pl-4">
          <PopularList />
        </div>
      </div>
    </div>
  )
}

export default MainController