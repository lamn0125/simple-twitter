import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import 'styles/main.scss';
// import { UserNavbar, PopularList } from 'components/Layout'
// import { MainContent } from 'components/Main'
// import { TweetContent } from 'components/TweetContent'
import Main from 'components/MainController'

function App() {
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-2 col-lg-2 d-flex flex-column justify-content-between pl-0 pr-4">
    //       <UserNavbar />
    //     </div>
    //     <div className="main-border col-md-7 col-lg-7 p-0">
    //       <MainContent />
    //       <TweetContent />
    //     </div>
    //     <div className="col-md-3 col-lg-3 mt-3 pr-0 pl-4">
    //       <PopularList />
    //     </div>
    //   </div>
    // </div>

    <Main />
  )
}

export default App

