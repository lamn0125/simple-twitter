import style from './AdminTweetListItem.module.scss'
import FakeIcon from 'assets/icons/FakeIcon.svg'
import CrossBtn from 'assets/icons/CrossBtn.svg'

function AdminTweetListItem() {
  return (
    <div className={style.tweetItem}>
      <img className={style.tweetItem__image} src={FakeIcon} alt="" / >
      <div className={style.tweetItem__content}>
        <div className={style.tweetItem__content__userInfo}>
          <span className={style.tweetItem__content__userInfo_name}>Apple</span>
            <span className={style.tweetItem__content__userInfo_detail}>
              @apple・3小時前
          </span>
        </div>
        <div className={style.tweetItem__content__text}>
          <p>
          {/* 可以直接在清單上快覽 Tweet 的前 50 個字 */}

            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.
          </p>
        </div>
        </div>
        <div>
          <img src={CrossBtn} alt="" className={style.tweetItem__crossBtn}/>
        </div>
    </div>
  )
}

export default AdminTweetListItem