import { ReactComponent as BackArrow } from 'assets/icons/Property 2=outlined, Property 3=back@1x.svg'

const Header = () => {
  return(
    <div className="d-flex align-items-center p-4">
      <a href="/">
        <BackArrow />
      </a> 
      <h4 className="ml-3">推文</h4>
    </div>
  )
}

export default Header