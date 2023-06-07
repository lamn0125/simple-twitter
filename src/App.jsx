import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  RegisterPage,
  UserLoginPage,
  AdminLoginPage,
  AdminTweetPage,
} from 'pages'

function App() {
  const basename = process.env.PUBLIC_URL;
  return (
    <div className="app">
    <BrowserRouter basename={basename}>
      <Routes>
         <Route path="login" element={<UserLoginPage />} />
         <Route path="register" element={<RegisterPage />} />
         <Route path="admin" element={<AdminLoginPage />} />
         <Route path="admin/tweet" element={<AdminTweetPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
