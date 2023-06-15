import AuthInput from 'components/AuthInput.jsx'
import { useContext, useEffect, useState } from 'react'
import logo from 'assets/icons/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import style from './UserLoginPage.module.scss'
import Swal from 'sweetalert2';
import { login } from 'api/auth'

function UserLoginPage() {
  const navigate = useNavigate()
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
  const token = localStorage.getItem('token')
  if (token) {
    navigate('/main')
  }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !account.trim() ||
      !password.trim()
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
    } else {
      const { token, id, role} = await login({
        account,
        password,
      });
      if (token && role === 'user') {
        localStorage.setItem('token', token)
        localStorage.setItem('id', id)
        localStorage.setItem('role', role)
        Swal.fire({
          position: 'top',
          title: '登入成功',
          timer: 1500,
          icon: 'success',
          showConfirmButton: false,
        });
        navigate('/main')
      } else {
        Swal.fire({
          position: 'top',
          title: '帳號或密碼輸入錯誤！',
          timer: 1500,
          icon: 'error',
          showConfirmButton: false,
        });
      }
    };
  }



  return (
    <div className={style.form}>
      <img src={logo} alt="" />
      <h1 className={style.title}>登入 Alphitter</h1>
      <form onSubmit={handleSubmit}>
        <AuthInput
          label="帳號"
          type="text"
          value={account}
          placeholder="請輸入帳號"
          onChange={(e) => {
            setAccount(e.target.value)
          }}
          />
        <AuthInput
          label="密碼"
          type="password"
          value={password}
          placeholder="請輸入密碼"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <button className={style.btn}>登入</button>
      </form>
      <div className={style.links}>
        <span className={style.linkItem}>
          <Link to="/register" >註冊</Link>
        </span>
        <span className={style.linkItem}>・</span>
        <span className={style.linkItem}>
          <Link to="/admin">後台登入</Link>
        </span>
      </div>
    </div>
  )
}

export default UserLoginPage