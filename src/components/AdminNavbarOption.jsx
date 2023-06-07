import style from './AdminNavbarOption.module.scss'


function AdminNavbarOption({active, image, text}) {
  return (
    <div className={style.navbarOption}>
      <img src={image} alt="" />
      <h2>{text}</h2>
    </div>
  )
}

export default AdminNavbarOption