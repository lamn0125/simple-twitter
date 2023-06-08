import AdminNavbar from 'components/AdminNavbar'
import AdminUserListItem from 'components/AdminUserListItem'
import style from './AdminUsersListPage.module.scss'

function AdminUserListPage() {
  return (
    <div className={style.userPageContainer}>
      <AdminNavbar currentPage='AdminUserListPage'/>
      <div className={style.userPageMain}>
        <h2 className={style.userPageMain__title}>使用者列表</h2>
        <div className={style.userPageMain__items}>
          <AdminUserListItem />
          <AdminUserListItem />
          <AdminUserListItem />
          <AdminUserListItem />
          <AdminUserListItem />
        </div>
      </div>
    </div>
  )
}

export default AdminUserListPage