import { useState } from 'react'
import { UserNavbar, PopularList } from 'components/Layout'
import MainContent from 'components/Main/MainContent'

const MainPage = () => {
  // 控制Modal視窗是否顯示
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
          <MainContent
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

export default MainPage