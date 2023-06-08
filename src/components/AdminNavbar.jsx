import {useEffect, useState} from 'react'
import logo from 'assets/icons/logo.svg'
import HomeIcon from 'assets/icons/HomeIcon.svg'
import UserIcon from 'assets/icons/UserIcon.svg'
import Logout from 'assets/icons/Logout.svg'
import style from './AdminNavbar.module.scss'
import AdminNavbarOption from './AdminNavbarOption'
import { useNavigate } from 'react-router-dom'

function AdminNavbar({currentPage}) {
  const [isTweetActive, setIsTweetActive] = useState('')
  const [isUserActive, setIsUserActive] = useState('')

  useEffect(()=> {
    if(currentPage === 'AdminTweetListPage') {
      setIsTweetActive(true)
      setIsUserActive(false)
    } else if (currentPage === 'AdminUserListPage'){
      setIsTweetActive(false)
      setIsUserActive(true)
    }
  },[])

  const navigate = useNavigate()

  function handleClick(text){
    if(text === "推文清單") {
      navigate('/admin/tweets')
    }
    if (text === "使用者列表") {
      navigate('/admin/users')
    }
    if (text === "登出") {
      // add logout function
      navigate('/login')
    }
  }

    return (
    <div className={style.navbar}>
      <img src={logo} alt="" />
      <AdminNavbarOption text='推文清單' image={HomeIcon} onClick={handleClick} active={isTweetActive}/>
      <AdminNavbarOption text='使用者列表' image={UserIcon} onClick={handleClick} active={isUserActive}/>
      <div  className={style.navbar__logout}>
        <AdminNavbarOption text='登出' image={Logout} onClick={handleClick}/>
      </div>
    </div>
  )
}

export default AdminNavbar