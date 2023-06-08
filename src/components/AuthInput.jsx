import style from './AuthInput.module.scss'


const AuthInput = ({ label, type, value, name, placeholder, onChange, errorMsg}) => {

  let nameLengthTooLong,
      accountLengthTooLong,
      emailInValid,
      tweetContentTooLong = null;

  if (label === '名稱' && value) {
    if (value.length > 50) {
      nameLengthTooLong = true
    }
  }
  if (label === '帳號' && value) {
    if (value.length > 50) {
      accountLengthTooLong = true
    }
  }

  if (label === 'Email' && value) {
    if (value.indexOf('@') === -1) {
      emailInValid = true
    }
  }
  // 推文字數限制在 140 字以內
  if (label === 'TweetContent ' && value) {
    if (value.length > 140) {
      tweetContentTooLong = true
    }
  }

  return (
    <div className={style.AuthInputContainer}>
      <div className={style.AuthInputContainer_input}>
        <label className={style.label}>
          {label}
        </label>
        <input
        className={style.input}
          type={type || 'text'}
          vale={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        {nameLengthTooLong && (
          <div className={style.AuthInputContainer_errorMsg}>字數超出上限！</div>
        )}
        {accountLengthTooLong && (
          <div className={style.AuthInputContainer_errorMsg}>字數超出上限！</div>
        )}
        {emailInValid && (
          <div className={style.AuthInputContainer_errorMsg}>Email格式錯誤</div>
        )}
        {/* 推文字數限制在 140 字以內 */}
        {tweetContentTooLong && (
          <div className={style.AuthInputContainer_errorMsg}>字數超出上限！</div>
        )}
        {/* {isBlank && (
          <div className={style.AuthInputContainer_errorMsg}>Empty!!</div>
        )} */}
      </div>
  </div>

  )
}

export default AuthInput

