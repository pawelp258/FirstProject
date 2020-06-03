import React, { useState } from 'react' 

import firebase, { storage } from '../../config/fbConfig'


import styles from './uploadPhoto.module.css'
import { useSelector } from 'react-redux'

const UploadPhoto = props => {

    const currentUserId = useSelector(state => state.firebase.auth.uid)

    const [progressUpload, setProgressUpload] = useState(0);

    //obsługa bledu przy wybieraniu zdjecia jak sie wcisnie anuluj

    const upload = () => {
        const {photo} = props;
        const uploadTask = storage.ref(`images/${currentUserId}_photo`).put(photo);
        uploadTask.on('state_changed', 
            snapshot => {
                // progess
                const uploadProgess = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgressUpload(uploadProgess)
            },
            error => {
                // error
                console.log(error)
            }, () => {
                storage.ref('images').child(`${currentUserId}_photo`).getDownloadURL()
                    .then(fireBaseUrl => {
                        console.log(fireBaseUrl)
                        firebase.firestore().collection("uzytkownik").doc(currentUserId).update({
                            zdjecie: fireBaseUrl
                        }).then(console.log("succ update"))
                        .catch(err => console.log(err))              
                    })
            }
        )
    }

    let displayName;
    if(props.photo.name.length < 10)
        displayName = props.photo.name;
    else
        displayName = props.photo.name.substr(0, 4)+"..."+props.photo.name.substr(-6);

    return (
        <div className={styles.UploadPhotoContainer}>
            <progress max="100" value={progressUpload} className={styles.uploadPhotoProgressBar}></progress>
            {displayName}
            <div 
                className={styles.sendPhotoButton}
                onClick={()=>upload()}
                > 
                Wyślij zdjęcie
            </div>
        </div>
    )
}

export default UploadPhoto;