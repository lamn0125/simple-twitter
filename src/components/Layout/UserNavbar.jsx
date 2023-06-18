import { Button } from 'react-bootstrap'
import Logo from 'assets/images/logo@1x.svg'
import { ReactComponent as Home } from 'assets/icons/Property 2=outlined, Property 3=home@1x.svg'
import { ReactComponent as ActiveHome } from 'assets/icons/icon_filled_home@1x.svg'
import { ReactComponent as User } from 'assets/icons/Property 2=outlined, Property 3=user@1x.svg'
import { ReactComponent as ActiveUser } from 'assets/icons/icon_tweet_xs_filled_user@1x.svg'
import { ReactComponent as Setting } from 'assets/icons/Property 2=outlined, Property 3=cog@1x.svg'
import { ReactComponent as ActiveSetting } from 'assets/icons/icon_tweet_xs_filled_setting@1x.svg'
import { ReactComponent as Logout } from 'assets/icons/Property 2=outlined, Property 3=logout@1x.svg'
import styles from 'components/Layout/UserNavbar.module.scss'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const UserNavbar = ({ toggleTweetModal }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { path: '/main', name: '首頁', Icon: Home, ActiveIcon: ActiveHome },
    { path: '/user/self', name: '個人資料', Icon: User, ActiveIcon: ActiveUser },
    { path: '/setting', name: '設定', Icon: Setting, ActiveIcon: ActiveSetting }
  ]

  function handleClick(path) {
    navigate(path)
  }

  return (
    <>
      <nav className="d-flex flex-column">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="avatar" />
        </a>
        <div className="d-flex flex-column">
          <ul>
            {navItems.map((item) => (
              <li key={item.path} onClick={() => handleClick(item.path)}>
                <Link className={`${styles.navLink} d-flex`} to={item.path}>
                  {location.pathname === item.path && item.ActiveIcon ? <item.ActiveIcon className="mx-2"/> : <item.Icon className="mx-2"/>}
                  <h5 className={location.pathname === item.path ? 'active' : ''}>{item.name}</h5>
                </Link>
              </li>
            ))}
          </ul>
          <Button className="btn tweet-btn btn-brand col mt-1" onClick={toggleTweetModal}>推文</Button>
        </div>
      </nav>
      <div className={styles.logoutContainer} onClick={() => handleClick('/login')}>
        {/* <a className={`${styles.navLink} d-flex`} href="/">
          <Logout className="mx-2"/>
          <h5>登出</h5>
        </a> */}
        <Link className={`${styles.navLink} d-flex`} to="/login">
          <Logout className="mx-2"/>
          <h5>登出</h5>
        </Link>
      </div>
    </>
  )
}

export default UserNavbar

