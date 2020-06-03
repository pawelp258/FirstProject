import React, { Fragment, useState } from 'react'
import UploadPhoto from '../../components/uploadPhoto/uploadPhoto'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Pencil from '../../UI/icons/icon-pencil.svg'

import styles from './editUser.module.css'
import { useSelector } from 'react-redux'

import BackIcon from '../../UI/icons/icon-back-black.svg'
import Exit from '../../UI/icons/editUser/exit.svg'

import MainContent from '../../components/editUserContent/mainContent/mainContent'
import ChangeBirthDate from '../../components/editUserContent/changeBirthDate'
import ChangeEmail from '../../components/editUserContent/changeEmail'
import ChangeName from '../../components/editUserContent/changeName'
import ChangePassword from '../../components/editUserContent/changePassword'

const EditUser = props => {

    const currentUser = useSelector(state => state.firebase.profile);

    const [showUploadPhoto, setShowUploadPhoto] = useState(false);
    const [imageAsFile, setImageAsFile] = useState('');

    const [content, setContent] = useState('main');

    const [showBackIcon, setShowBackIcon] = useState(false)

    const upload = () => {
        document.getElementById("uploadFile").click();
    }

    const fileSelectHandler = async event => {
        const image = event.target.files[0]
        await setImageAsFile(image)
        setShowUploadPhoto(true)
    }

    const closeEditUser = close => {
        setImageAsFile('');
        setContent('main')
        setShowBackIcon(false) 
        setShowUploadPhoto(false);
        close();
    }

    const chaningStage = (stage) => {
        if(stage === 'main')
            setShowBackIcon(false) 
        else
            setShowBackIcon(true) 

        setContent(stage)
    }

    const switchContet = () => {
        switch(content) {
            case 'email':
                return <ChangeEmail currentUser={currentUser} changeStage={(stage, showBackArrow) => chaningStage(stage)}/>;
            case 'name':
                return <ChangeName currentUser={currentUser} changeStage={(stage, showBackArrow) => chaningStage(stage)}/>;
            case 'birthDay':
                return <ChangeBirthDate currentUser={currentUser} changeStage={(stage, showBackArrow) => chaningStage(stage)}/>;
            case 'password':
                return <ChangePassword currentUser={currentUser} changeStage={(stage, showBackArrow) => chaningStage(stage)}/>;
            default:
                return <MainContent currentUser={currentUser} changeStage={(stage, showBackArrow) => chaningStage(stage)}/>;

        }
    }

    let photo;
    if(currentUser.zdjecie)
        photo = currentUser.zdjecie;
    else
        photo = 'https://paga.org.pl/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
    return(
        <Fragment>
            <Backdrop show={props.show} close={()=>closeEditUser(props.close)} />
            <div 
                className={styles.EditUserContainer}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0' }}>
                { showBackIcon && 
                <img 
                    alt="back icon"
                    src={BackIcon} 
                    className={styles.EditUserBackIcon}
                    onClick={()=>chaningStage('main')}/>
                }  
                <img 
                    src={Exit} 
                    alt="exit icon"
                    className={styles.EditUserExitIcon}
                    onClick={()=>closeEditUser(props.close)}/>
                <div>
                    <img src={photo} alt="user_photo_icon" width="140px" height="140px" className={styles.EditUserPhoto} />
                    <img 
                        src={Pencil}
                        alt="edit icon"
                        width="35px" 
                        height="35px" 
                        className={styles.EditUserPencil} 
                        onClick={() => upload()}
                        />
                    <input 
                        type="file" 
                        style={{display: "none"}}
                        id="uploadFile"
                        onChange={(event) => fileSelectHandler(event)}
                        />
                    <p>{currentUser.nick ? currentUser.nick : "Tutaj jest nick"}</p>
                    { showUploadPhoto ? 
                        <UploadPhoto photo={imageAsFile}/> 
                    :
                        null
                    }     
                </div>

                <div className={styles.EditUserContent}>
                    {switchContet()}
                </div>

            </div>
        </Fragment>
    )
}

export default EditUser;

/* 

        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
*/