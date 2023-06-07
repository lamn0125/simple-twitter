import AuthInput from 'components/AuthInput/AuthInput.jsx'
import style from '../UserLoginPage/UserLoginPage.module.scss'
import { useContext, useEffect, useState } from 'react'
import logo from 'icons/logo.svg'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

function RegisterPage() {
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recheckPassword, setRecheckPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    if (
      account.length === 0 ||
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      recheckPassword.length === 0
    )
    {
      return
    }
      console.log('submitted!')

  }
  return (
    <div className={style.form}>
      <img src={logo} alt="" />
      <h1 className={style.title}>建立你的帳號</h1>
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
          label="名稱"
          type="text"
          value={name}
          placeholder="請輸入使用者名稱"
          onChange={(nameValue) => {
            setName(nameValue)
          }}
        />
        <AuthInput
          label="Email"
          type="email"
          value={email}
          placeholder="請輸入Email"
          onChange={(emailValue) => {
            setEmail(emailValue)
          }}
        />
        <AuthInput
          label="密碼"
          type="password"
          value={password}
          placeholder="請設定密碼"
          onChange={(passwordValue) => {
            setPassword(passwordValue)
          }}
        />
        <AuthInput
          label="密碼確認"
          type="password"
          value={recheckPassword}
          placeholder="請再次輸入密碼"
          onChange={(recheckPasswordValue) => {
            setRecheckPassword(recheckPasswordValue)
          }}
        />
        <button  className={style.btn}>註冊</button>
      </form>
      <div className={style.linkCancel}>
        <span>
          <Link to="/login" className={style.linkItem}>取消</Link>
        </span>
      </div>
    </div>
  )
}

export default RegisterPage