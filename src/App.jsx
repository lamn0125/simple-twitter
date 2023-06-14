import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from 'styles/App.module.scss'
import {
  RegisterPage,
  UserLoginPage,
  AdminLoginPage,
  AdminTweetListPage,
  AdminUserListPage,
  Setting,
  UserSelfPage,
  UserOtherPage
} from 'pages'

function App() {
  const basename = process.env.PUBLIC_URL;
  return (
    <div className={style.app}>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="login" element={<UserLoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="admin" element={<AdminLoginPage />} />
        <Route path="admin/tweets" element={<AdminTweetListPage />} />
        <Route path="admin/users" element={<AdminUserListPage />} />
        <Route path="setting" element={<Setting />} />
        <Route path="user/self" element={<UserSelfPage />} />
        <Route path="user/other" element={<UserOtherPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
