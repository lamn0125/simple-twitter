import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'styles/main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage, TweetContentPage } from 'pages'
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
          </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  )
}

export default App

