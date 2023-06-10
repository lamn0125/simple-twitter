import OtherUserAvatar from 'assets/images/img@1x.svg'
import styles from 'components/Layout/PopularList.module.scss'

const PopularList = () => {
  return(
    <div className={`${styles.card} border-0`}>
      <h4 className={`${styles.cardHeadr} dark-20 p-4`}>推薦跟隨</h4>
      <div className={`${styles.cardBody} dark-20 px-3`}>
        <ul className="list-group list-group-flush dark-20">
          <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0 dark-20 border-0 ">
            <div className="d-flex">
              <a href="/">
                <img src={OtherUserAvatar} alt="avatar" />
              </a>
              <div className="ml-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">Pizza Hut</a>
                <div className="fz-sm text-secondary">@pizzahut</div>
              </div>
            </div>             
            <button className="btn following-btn btn-brand">正在跟隨</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0 dark-20 border-0">
            <div className="d-flex">
              <a href="/">
                <img src={OtherUserAvatar} alt="avatar" />
              </a>
              <div className="ml-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">McDon ...</a>
                <div className="fz-sm text-secondary">@McDona ...</div>
              </div>
            </div>             
            <button className="btn following-btn btn-brand">正在跟隨</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0 dark-20 border-0">
            <div className="d-flex">
              <a href="/">
                <img src={OtherUserAvatar} alt="avatar" />
              </a>
              <div className="ml-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">Bank of ...</a>
                <div className="fz-sm text-secondary">@BankOfA ...</div>
              </div>
            </div>             
            <button className="btn follow-btn">跟隨</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0 dark-20 border-0">
            <div className="d-flex">
              <a href="/">
                <img src={OtherUserAvatar} alt="avatar" />
              </a>
              <div className="ml-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">L'Oréal</a>
                <div className="fz-sm text-secondary">@Loreal</div>
              </div>
            </div>             
            <button className="btn follow-btn">跟隨</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0 dark-20 border-0">
            <div className="d-flex">
              <a href="/">
                <img src={OtherUserAvatar} alt="avatar" />
              </a>
              <div className="ml-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">Nintendo</a>
                <div className="fz-sm text-secondary">@Nintendo</div>
              </div>
            </div>             
            <button className="btn follow-btn">跟隨</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0 dark-20 border-0">
            <div className="d-flex">
              <a href="/">
                <img src={OtherUserAvatar} alt="avatar" />
              </a>
              <div className="ml-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">MasterCard</a>
                <div className="fz-sm text-secondary">@MasterCard</div>
              </div>
            </div>             
            <button className="btn follow-btn">跟隨</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0 dark-20 border-0">
            <div className="d-flex">
              <a href="/">
                <img src={OtherUserAvatar} alt="avatar" />
              </a>
              <div className="ml-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">Nike</a>
                <div className="fz-sm text-secondary">@Nike</div>
              </div>
            </div>             
            <button className="btn follow-btn">跟隨</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3 px-0 dark-20 border-0">
            <div className="d-flex">
              <a href="/">
                <img src={OtherUserAvatar} alt="avatar" />
              </a>
              <div className="ml-2">
                <a href="/" className="fz-base-bold dark-100 mr-2">Adidas</a>
                <div className="fz-sm text-secondary">@adidas</div>
              </div>
            </div>             
            <button className="btn follow-btn">跟隨</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PopularList