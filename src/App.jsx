import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'styles/main.scss';
import style from 'styles/App.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage,
        TweetContentPage,
        RegisterPage,
        UserLoginPage,
        AdminLoginPage,
        AdminTweetListPage,
        AdminUserListPage,
        Setting,
        UserSelfPage,
        UserOtherPage
      } from 'pages'
// import { AuthProvider } from 'contexts/AuthContext'

const basename = process.env.PUBLIC_URL

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        {/* <AuthProvider> */}
          <Routes>
            <Route path="main" element={<MainPage />} />
            <Route path="tweet-content" element={<TweetContentPage />} />
            <Route path="*" element={<MainPage />} />
            <Route path="login" element={<UserLoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="admin" element={<AdminLoginPage />} />
            <Route path="admin/tweets" element={<AdminTweetListPage />} />
            <Route path="admin/users" element={<AdminUserListPage />} />
            <Route path="setting" element={<Setting />} />
            <Route path="user/self" element={<UserSelfPage />} />
            <Route path="user/other" element={<UserOtherPage />} />
          </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  )
}

export default App

