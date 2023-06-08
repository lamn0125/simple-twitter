import Logo from 'assets/images/logo@1x.svg'
import { ReactComponent as Home } from 'assets/icons/Property 2=outlined, Property 3=home@1x.svg'
import { ReactComponent as User } from 'assets/icons/Property 2=outlined, Property 3=user@1x.svg'
import { ReactComponent as Setting } from 'assets/icons/Property 2=outlined, Property 3=cog@1x.svg'
import { ReactComponent as Logout } from 'assets/icons/Property 2=outlined, Property 3=logout@1x.svg'
import { Nav, Button } from 'react-bootstrap'

const UserNavbar = () => {
  return(
    <Nav className="nav flex-column">
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="avatar" />
      </a>
      <a className="nav-link active" href="/">
        <Home />
        首頁
      </a>
      <a className="nav-link" href="/">
        <User />
        個人資料
      </a>
      <a className="nav-link" href="/">
        <Setting />
        設定
      </a>
      <Button variant="primary">推文</Button>
      <a className="nav-link" href="/">
        <Logout />
        登出
      </a>
    </Nav>
  )
}

export default UserNavbar

