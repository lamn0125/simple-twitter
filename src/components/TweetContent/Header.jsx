import { ReactComponent as BackArrow } from 'assets/icons/Property 2=outlined, Property 3=back@1x.svg'

const Header = ({handleBackClick}) => {
  return(
    <div className="d-flex align-items-center p-4">
      <BackArrow className="cursor-pointer" 
        onClick={handleBackClick} 
      />
      <h4 className="ml-3">推文</h4>
    </div>
  )
}

export default Header