import React from 'react'
import style from './AuthInput.module.scss'

function AuthInput({ label, type, value, placeholder, onChange }) {
  return (
    <div className={style.AuthInputContainer}>
      <label className={style.label}>
        {label}
      </label>
      <input
      className={style.input}
        type={type || 'text'}
        vale={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default AuthInput

