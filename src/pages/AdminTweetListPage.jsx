import AdminNavbar from 'components/AdminNavbar'
import AdminTweetListItem from 'components/AdminTweetListItem'
import style from './AdminTweetListPage.module.scss'

function AdminTweetListPage() {
  return (
    <div className={style.tweetPageContainer}>
      <AdminNavbar currentPage='AdminTweetListPage'/>
      <div className={style.tweetPageMain}>
        <h2 className={style.tweetPageMain__title}>推文清單</h2>
        <div className={style.tweetPageMain__items}>
          <AdminTweetListItem />
          <AdminTweetListItem />
          <AdminTweetListItem />
          <AdminTweetListItem />
          <AdminTweetListItem />
           <AdminTweetListItem />
          <AdminTweetListItem />
          <AdminTweetListItem />
          <AdminTweetListItem />
           <AdminTweetListItem />
          <AdminTweetListItem />
          <AdminTweetListItem />
          <AdminTweetListItem />
        </div>
      </div>

    </div>
  )
}

export default AdminTweetListPage