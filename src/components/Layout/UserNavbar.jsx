import { Button } from 'react-bootstrap'
import Logo from 'assets/images/logo@1x.svg'
import { ReactComponent as ActiveHome } from 'assets/icons/icon_filled_home@1x.svg'
import { ReactComponent as User } from 'assets/icons/Property 2=outlined, Property 3=user@1x.svg'
import { ReactComponent as Setting } from 'assets/icons/Property 2=outlined, Property 3=cog@1x.svg'
import { ReactComponent as Logout } from 'assets/icons/Property 2=outlined, Property 3=logout@1x.svg'
import styles from 'components/Layout/UserNavbar.module.scss'
import { useNavigate } from 'react-router-dom'

const UserNavbar = ({ handleTweetModalShow }) => {
const navigate = useNavigate()

function handleClick(e){
  e.preventDefault()
  if (e.target.innerText === '首頁'){
    navigate('/main')
  } else if (e.target.innerText === '個人資料'){
    navigate('/user/self')
  } else if(e.target.innerText === '設定'){
     navigate('/setting')
  } else if (e.target.innerText === '登出'){
    navigate('/login')
  }
}

  return(
    <>
      <nav className="d-flex flex-column">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="avatar" />
        </a>
        <div className="d-flex flex-column">
          <ul>
            <li onClick={handleClick}>
              <a className={`${styles.navLink} d-flex`} href="/">
                <ActiveHome className="mx-2"/>
                <h5 className="active">首頁</h5>
              </a>
            </li>
            <li onClick={handleClick}>
              <a className={`${styles.navLink} d-flex`} href="/">
                <User className="mx-2"/>
                <h5>個人資料</h5>
              </a>
            </li>
            <li onClick={handleClick}>
              <a className={`${styles.navLink} d-flex`} href="/">
                <Setting className="mx-2"/>
                <h5>設定</h5>
              </a>
            </li>
          </ul>
          <Button className="btn tweet-btn btn-brand col mt-1" onClick={handleTweetModalShow}>推文</Button>
        </div>
      </nav>
      <div className={styles.logoutContainer} onClick={handleClick}>
        <a className={`${styles.navLink} d-flex`} href="/">
          <Logout className="mx-2"/>
          <h5>登出</h5>
        </a>
      </div>
    </>
  )
}

export default UserNavbar

