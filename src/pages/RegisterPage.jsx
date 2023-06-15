import AuthInput from 'components/AuthInput.jsx'
import style from './UserLoginPage.module.scss'
import { useContext, useEffect, useState } from 'react'
import logo from 'assets/icons/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { register } from 'api/auth'

function RegisterPage() {
  const navigate = useNavigate()
  const [account, setAccount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const handleSubmit = async(e) => {

    e.preventDefault();
    if (
      !account.trim() ||
      !name.trim()||
      !email.trim() ||
      !password.trim() ||
      !checkPassword.trim()
    )
    {
      Swal.fire({
        position: 'top',
        title: '內容不得空白',
        timer: 1500,
        icon: 'error',
        showConfirmButton: false,
      });
      return
    }
    if (account.length > 50 || name.length > 50) {
      return;
    }
    if(password !== checkPassword) {
      Swal.fire({
        position: 'top',
        title: '密碼不一致',
        timer: 1500,
        icon: 'error',
        showConfirmButton: false,
      });
      return
    } else {
        const { user } = await register({
        name,
        email,
        account,
        password,
        checkPassword,
      })
      console.log(user)
      if (user){
        Swal.fire({
          position: 'top',
          title: '註冊成功',
          timer: 2000,
          icon: 'success',
          showConfirmButton: false,
        });
        navigate('/login')
      } else {
        Swal.fire({
          position: 'top',
          title: 'Email或帳號已註冊, 註冊失敗',
          timer: 2500,
          icon: 'error',
          showConfirmButton: false,
        });
      }
    }

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
          value={checkPassword}
          name={checkPassword}
          placeholder="請再次輸入密碼"
          onChange={(e) => {
            setCheckPassword(e.target.value)
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