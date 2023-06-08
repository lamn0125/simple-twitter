import Logo from 'assets/images/logo@1x.svg'
import { ReactComponent as ActiveHome } from 'assets/icons/activehome@1x.svg'
// import { ReactComponent as Home } from 'assets/icons/Property 2=outlined, Property 3=home@1x.svg'
import { ReactComponent as User } from 'assets/icons/Property 2=outlined, Property 3=user@1x.svg'
import { ReactComponent as Setting } from 'assets/icons/Property 2=outlined, Property 3=cog@1x.svg'
import { ReactComponent as Logout } from 'assets/icons/Property 2=outlined, Property 3=logout@1x.svg'
import styles from 'components/Layout/UserNavbar.module.scss'

const UserNavbar = () => {
  return(
    <nav className={styles.navbar}>
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="avatar" />
      </a>
      <div className={styles.navContainer}>
        <ul className="navbarNav">
          <li className={styles.navItem}>
            <a className={`${styles.navLink} d-flex`} href="/">
              <ActiveHome class="mx-2" />
              <p class="active">首頁</p>
            </a>
          </li>
          <li className={styles.navItem} href="/">
            <a className={`${styles.navLink} d-flex`} href="/">
              <User class="mx-2" />
              <p>個人資料</p>
            </a> 
          </li>
          <li className={styles.navItem} href="/">
            <a className={`${styles.navLink} d-flex`} href="/">
              <Setting class="mx-2" />
              <p>設定</p>
            </a>   
          </li>
          <button className="btnInput">推文</button>
        </ul>

        <div className={styles.logoutContainer}>
          <a className={`${styles.navLink} d-flex mb-3`} href="/">
            <Logout class="mx-2" />
            <p>登出</p>
          </a>
        </div>
      </div> 
    </nav>
  )
}

export default UserNavbar

