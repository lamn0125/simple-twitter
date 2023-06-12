import Header from 'components/Main/Header'
import TweetInput from 'components/Main/TweetInput'
import TweetCollection from 'components/Main/TweetCollection'

const MainContent = ({ isModalShow, handleShow, handleClose }) => {
  return(
    <>
      <Header />
      <TweetInput 
        isModalShow={isModalShow}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <TweetCollection />
    </>
  )
}

export default MainContent