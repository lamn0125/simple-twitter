import AuthInput from 'components/AuthInput.jsx'
import style from './UserLoginPage.module.scss'
import { useContext, useEffect, useState } from 'react'
import logo from 'assets/icons/logo.svg'
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
      recheckPassword.length === 0 ||
      password !== recheckPassword
    )
    {
      return
    }

    //串接api
    console.log(account,name, email, password, recheckPassword)

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
          name={account}
          placeholder="請輸入帳號"
          onChange={(e) => {
            setAccount(e.target.value)
          }}
          />
        <AuthInput
          label="名稱"
          type="text"
          value={name}
          name={name}
          placeholder="請輸入使用者名稱"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <AuthInput
          label="Email"
          type="email"
          value={email}
          name={email}
          placeholder="請輸入Email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <AuthInput
          label="密碼"
          type="password"
          value={password}
          name={password}
          placeholder="請設定密碼"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <AuthInput
          label="密碼確認"
          type="password"
          value={recheckPassword}
          name={recheckPassword}
          placeholder="請再次輸入密碼"
          onChange={(e) => {
            setRecheckPassword(e.target.value)
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