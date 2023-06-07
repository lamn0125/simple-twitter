import AuthInput from 'components/AuthInput/AuthInput.jsx'
import style from './UserLoginPage.module.scss'
import { useContext, useEffect, useState } from 'react'
import logo from 'icons/logo.svg'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

function Admin() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (account.length === 0 || password.length === 0) {
      return;
    }
    console.log('submitted!')
  }

  return (
    <div className={style.form}>
      <img src={logo} alt="" />
      <h1 className={style.title}>後台登入</h1>
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="帳號"
          type="text"
          value={account}
          placeholder="請輸入帳號"
          onChange={(accountValue) => {
            setAccount(accountValue)
          }}
          />
        <AuthInput
          label="密碼"
          type="password"
          value=""
          placeholder="請輸入密碼"
          onChange={(passwordValue) => {
            setPassword(passwordValue)
          }}
        />
        <button className={style.btn}>登入</button>
      </form>
      <div>
        <div className={style.links}>
          <Link to="/register" className={style.linkItem}>前台登入</Link>
        </div>
      </div>
    </div>
  )
}

export default Admin