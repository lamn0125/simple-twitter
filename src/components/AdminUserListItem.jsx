import style from './AdminUserListItem.module.scss'
import FakeBg from 'assets/images/FakeBg.svg'
import FeatherIcon from 'assets/icons/FeatherIcon.svg'
import HeartIcon from 'assets/icons/HeartIcon.svg'
import FakeAvatar from 'assets/images/FakeAvatar.svg'

function AdminUserListItem() {
  return (
      <div className={style.userItem__card}>
        <img src={FakeBg} class="card-img-top" alt="..." className={style.userItem__card_bg}/>
        <img src={FakeAvatar} alt="" className={style.userItem__card_avatar}/>
        <div className={style.userItem__card_body}>
          <div className={style.userItem__card_info}>
            <div className={style.userItem__card_name}>John Doe</div>
            <div className={style.userItem__card_detail}>@heyjohn</div>

            <div className={style.userItem_card_iconsContainer}>
              <span className={style.userItem_card_number}>
                <img src={FeatherIcon} alt="" className={style.userItem_card_icon}/>
                <span>1.5k</span>
              </span>
               <span className={style.userItem_card_number}>
                <img src={HeartIcon} alt="" className={style.userItem_card_icon}/>
                <span>20k</span>
              </span>
            </div>

            <div className={style.userItem__card_followContainer}>
            <div className={style.userItem__card_following}>
              <span className={style.userItem__card_count}>34 個</span>
              <span className={style.userItem__card_text}>跟隨中</span>
            </div>
            <div className={style.userItem__card_follower}>
              <span className={style.userItem__card_count}>52 位</span>
              <span className={style.userItem__card_text}>跟隨者</span>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default AdminUserListItem