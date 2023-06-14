import Modal from 'react-bootstrap/Modal';
import AuthInput from 'components/AuthInput.jsx'
import TextareaInput from 'components/TextareaInput.jsx'
import style from './EditProfile.module.scss'
import CrossBtn_orange from 'assets/icons/CrossBtn_orange.svg'
import Camera from 'assets/icons/Camera.svg'
import CrossBtn_white from 'assets/icons/CrossBtn_white.svg'
import {useState} from 'react'
import FakeAvatar from 'assets/images/FakeAvatar.svg'
import DefaultBg from 'assets/images/DefaultBg.svg'
import Swal from 'sweetalert2';


function EditProfile({show, handleClose}) {
  const [name, setName] = useState('');
  const [intro, setIntro] = useState('');


  function handleSave(){
    //API
    handleClose()
    console.log('save')
  }

  function handleChangeBg(){
    console.log('change bg ')
  }

  function handleDeleteBg(){
    console.log('delete Bg')
  }

  function handleChangeAvatar(){
    console.log('change avatar')
  }

  function handleInputChange(e){
    console.log('handleInputChange')
  }

  return (
    <div>
        <Modal show={show} onHide={handleClose} className={style.modalContainer}>
          <Modal.Header>
            <Modal.Title  className={style.editProfile_header}>
              <span onClick={handleClose} className={style.editProfile__closeBtn_Container}>
                <img src={CrossBtn_orange} alt="" className={style.editProfile__closeBtn}/>
              </span>
              <span  className={style.editProfile__title}>編輯個人資料</span>
              <button onClick={handleSave} className={style.editProfile__save}>儲存</button>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className={style.editProfile_body}>
          <div className={style.editProfile_body_photo}>
            <div className={style.editProfile_body_icons}>
              <img src={Camera} alt="" className={style.editProfile_camera} onClick={handleChangeBg}/>
              <img src={CrossBtn_white} alt="" className={style.editProfile_delete} onClick={handleDeleteBg}/>
            </div>
            <img src={DefaultBg} alt="" className={style.editProfile_body_bg} />

            <div className={style.editProfile_body_avatarContainer}>

              <img src={FakeAvatar} alt="" className={style.editProfile_body_avatar} />
              <div className={style.black}>
                <img src={Camera} alt="" className={style.camera} onClick={handleChangeAvatar}/>
              </div>
            </div>
          </div>
          <div className={style.editProfile_body_inputs}>
            <AuthInput
              label="名稱"
              type="text"
              value={name}
              name={name}
              placeholder="請輸入使用者名稱"
              onChange={(e) => {
              setName(e.target.value)
            }}
            currentPage="editProfile"
            />
            <TextareaInput
              label="自我介紹"
              type="text"
              value={intro}
              name={intro}
              placeholder="請輸入自我介紹"
              onChange={(e) => setIntro(e.target.value)}
            currentPage="editProfile"
            />
            </div>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default EditProfile