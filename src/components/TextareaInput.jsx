import style from './TextareaInput.module.scss'

const TextareaInput = ({label, type, placeholder, value, onChange, name, currentPage}) => {

  let
    selfIntroTooLong,
    showCountNum = null;

  if (currentPage === 'editProfile'){
      showCountNum = true
    }
  if (label === '自我介紹' && value) {
    if (value.length > 160) {
      selfIntroTooLong = true
    }
  }

  return (
    <div className={style.TextareaContainer}>
      <div className={style.TextareaContainer_input}>
        <label className={style.label}>
          {label}
        </label>
        <textarea
        className={style.input}
          type={type || 'text'}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
      </div>

      {showCountNum && (
        <div className={style.countNumber}> {value.length}/160</div>
      )}

      <div>
        {selfIntroTooLong && (
          <div className={style.TextareaContainer_errorMsg}>字數超出上限！</div>
        )}
      </div>
    </div>
  )
}

export default TextareaInput