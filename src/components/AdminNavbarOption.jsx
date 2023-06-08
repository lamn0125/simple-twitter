import style from './AdminNavbarOption.module.scss'
import {useState} from 'react'

function AdminNavbarOption({active, image, text, onClick}) {



  return (
    <div className={style.navbarOption} onClick={(e) => onClick(text)}>
      <img src={image} alt="" />
      <h2 className={active ? `${style.navbarOption__title_active}` : `${style.navbarOption__title}`}>{text}</h2>
    </div>
  )
}

export default AdminNavbarOption
