import AdminNavbar from "components/AdminNavbar" //之後換成userNavbar
import style from './UserPage.module.scss'
import BackBtn from 'assets/icons/BackBtn.svg'
import FakeAvatar from 'assets/images/FakeAvatar.svg'
import FakeUserProfileBg from 'assets/images/FakeUserProfileBg.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditProfile from 'components/EditProfile'
import Modal from 'react-bootstrap/Modal';


function UserSelfPage() {
  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  function handleBackClick(){
    //修改為回到上一頁
    navigate('/login')
  }

  return (
    <>
      <div className={style.userContainer}>
        <AdminNavbar />
        <div className={style.userMain}>

        <div className={style.userTitle}>
          <img src={BackBtn} alt="" className={style.userTitleBtn} onClick={handleBackClick}/>
          <div className={style.userTitle_name}>
            John Doe
            <div className={style.userTitle_postCount}>
              25
              <span>推文</span>
            </div>
          </div>
        </div>

        <div className={style.userContent}>
          <img src={FakeUserProfileBg} alt="" className={style.userContent_Bg}/ >
          <img src={FakeAvatar} alt="" className={style.userContent_Avatar}/>

          <div className={style.userContent__Btn_Container}>
            <button
              onClick={handleShow}
              className={style.userContent__EditBtn}>
              編輯個人資料
            </button>
          </div>

          <div className={style.userSelfContent_Info}>
            <div className={style.userSelfContent_Info_name}>John Doe</div>
            <div className={style.userSelfContent_Info_detail}>@heyjohn</div>
            <div className={style.userSelfContent_desc}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </div>
            <div className={style.userSelfContent_desc_followContainer}>
              <div className={style.userSelfContent_desc_following}>
                <span className={style.userSelfContent_desc_count}>34 個</span>
                <span className={style.userSelfContent_desc_text}>跟隨中</span>
              </div>
              <div className={style.userSelfContent_desc_follower}>
                <span className={style.userSelfContent_desc_count}>52 位</span>
                <span className={style.userSelfContent_desc_text}>跟隨者</span>
              </div>
            </div>
          </div>
        </div>

        </div>
        {/*  推薦跟隨 */}

        {show && <EditProfile
          handleClose={handleClose}
          show={show}
        />}



      </div>
    </>
  )
}

export default UserSelfPage