import AdminNavbar from "components/AdminNavbar" //之後換成userNavbar
import AuthInput from 'components/AuthInput'
import style from './Setting.module.scss'
import { useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';

function Setting() {

  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState(false)

  const [editUserInfo, setEditUserInfo] = useState({
      editAccount: '',
      editName: '',
      editEmail: '',
      editPassword: '',
      editRecheckPassword: '',
    })

  const handleChange = (e) => {
    setEditUserInfo({
      ...editUserInfo,
      [e.target.name]: e.target.value
    })
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const {
      editAccount,
      editName,
      editEmail,
      editPassword,
      editRecheckPassword,
    } = editUserInfo

    if(!editAccount.trim() || !editName.trim() || !editEmail.trim() || !editPassword.trim() || !editRecheckPassword.trim()){
      console.log('All blank must be filled')
      return
    }

    if(editAccount.length > 50 || editName.length > 50 ){
      return
    }

    if (editEmail.indexOf('@') === -1) {
      console.log('Invalid Email')
     return
    }

    if(editPassword !== editRecheckPassword){
      console.log('Password must be the same')
      return
    }

    //串API修改資料
    console.log(editUserInfo)
    //跳出更新成功提示 1.5秒
    //強制登出導向user login page
    // navigate('/login')
  }

  return (
    <div className={style.settingContainer}>

    {/* 之後換成userNavbar */}
      <AdminNavbar />

      <div className={style.settingMain}>
        <h2 className={style.settingMain__title}>帳戶設定</h2>
        <form className={style.settingMain__content} onSubmit={handleFormSubmit}>
          <AuthInput
            label="帳號"
            type="text"
            value={editUserInfo.editAccount}
            name="editAccount"
            placeholder="請輸入帳號"
            onChange={(e) => {
              handleChange(e)
              setErrorMsg('')
            }}
            errorMsg={errorMsg}
            />
          <AuthInput
            label="名稱"
            type="text"
            value={editUserInfo.editName}
            name="editName"
            placeholder="請輸入使用者名稱"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <AuthInput
            label="Email"
            type="email"
            value={editUserInfo.editEmail}
            name="editEmail"
            placeholder="請輸入Email"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <AuthInput
            label="密碼"
            type="password"
            value={editUserInfo.editPassword}
            name="editPassword"
            placeholder="請設定密碼"
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <AuthInput
            label="密碼確認"
            type="password"
            value={editUserInfo.editRecheckPassword}
            name="editRecheckPassword"
            placeholder="請再次輸入密碼"
            onChange={(e) => {
              handleChange(e)
            }}
          />
        <button className={style.settingMain__content_btn}>儲存</button>
      </form>
      </div>
    </div>
  )
}

export default Setting