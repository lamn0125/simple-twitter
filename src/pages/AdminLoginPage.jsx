import AuthInput from 'components/AuthInput.jsx'
import style from './UserLoginPage.module.scss'
import { useContext, useEffect, useState } from 'react'
import logo from 'assets/icons/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { adminLogin } from 'api/auth'


function AdminLoginPage() {
  const navigate = useNavigate()
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/admin/tweetList')
    }
  }, [navigate])

  const handleSubmit = async(e) => {
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
      const {token, id, role} = await adminLogin({
        account,
        password,
      });
       if (token && role === 'admin') {
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
        navigate('/admin/tweets')
      } else {
        Swal.fire({
          position: 'top',
          title: '帳號或密碼輸入錯誤！',
          timer: 1500,
          icon: 'error',
          showConfirmButton: false,
        });
      }

    }
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
      <div>
        <div className={style.links}>
          <Link to="/login" className={style.linkItem}>前台登入</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminLoginPage