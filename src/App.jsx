import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'styles/main.scss';
import { UserNavbar } from 'components/Layout'
import { MainContent } from 'components/Main'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-lg-3">
          <UserNavbar />
        </div>
        <div className="col-md-6 col-lg-6">
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default App

