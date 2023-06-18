import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'styles/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { MainPage,
//         TweetContentPage,
//         RegisterPage,
//         UserLoginPage,
//         AdminLoginPage,
//         AdminTweetListPage,
//         AdminUserListPage,
//         Setting,
//         UserSelfPage,
//         UserOtherPage
//       } from 'pages'
import MainPage from 'pages/MainPage'
import TweetContentPage from 'pages/TweetContentPage'
import UserLoginPage from 'pages/UserLoginPage';
import RegisterPage from 'pages/RegisterPage';
import AdminLoginPage from 'pages/AdminLoginPage';
import AdminTweetListPage from 'pages/AdminTweetListPage';
import AdminUserListPage from 'pages/AdminUserListPage';
import Setting from 'pages/Setting';
import UserSelfPage from 'pages/UserSelfPage';
import UserOtherPage from 'pages/UserOtherPage';
import { TweetsProvider } from 'contexts/TweetContext';
// import { AuthProvider } from 'contexts/AuthContext'

const basename = process.env.PUBLIC_URL

function App() {
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        {/* <AuthProvider> */}
          <TweetsProvider>
            <Routes>
              <Route path="main" element={<MainPage />} />
              <Route path="tweet-content" element={<TweetContentPage />} />
              <Route path="login" element={<UserLoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="admin" element={<AdminLoginPage />} />
              <Route path="admin/tweets" element={<AdminTweetListPage />} />
              <Route path="admin/users" element={<AdminUserListPage />} />
              <Route path="setting" element={<Setting />} />
              <Route path="user/self" element={<UserSelfPage />} />
              <Route path="user/other" element={<UserOtherPage />} />
              <Route path="*" element={<MainPage />} />
            </Routes>
          </TweetsProvider>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  )
}

export default App

