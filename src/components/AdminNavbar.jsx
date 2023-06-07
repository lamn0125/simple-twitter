import React from 'react'
import logo from 'icons/logo.svg'
import HomeIcon from 'icons/HomeIcon.svg'
import UserIcon from '/icons/UserIcon.svg'
import Logout from 'icons/Logout.svg'
import style from './AdminNavbar.module.scss'
import AdminNavbarOption from '../AdminNavbarOption/AdminNavbarOption'

function AdminNavbar() {
    return (
    <div className={style.navbar}>
      <img src={logo} alt="" />
      <AdminNavbarOption text='推文清單' image={HomeIcon}/>
      <AdminNavbarOption text='使用者列表' image={UserIcon}/>
      <AdminNavbarOption text='登出' image={Logout}/>
    </div>
  )
}

export default AdminNavbar