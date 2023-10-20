import React, { useState, useEffect } from 'react';
import styles from './Profil.module.scss';
import { useNavigate } from 'react-router-dom';

const Profil = (props) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...props.user });
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
      props.setUser(editedUser);
      alert("Vos informations ont été modifiées")
      setIsEditing(false);
    
  };

  const handleInputChange = (e, field) => {
    
    setEditedUser({ ...editedUser, [field]: e.target.value });
  };

  if (props.auth) {

    /*************/
    return (
      <div className={styles.profil}>
        <h1>Profil de {props.user.id}</h1>
        {isEditing ? (
          <div>
            <p>
             Nom d'utilisateur: <input type="text" value={editedUser.id} onChange={(e) => handleInputChange(e, 'id')} />
            </p>

            <p>
             Email: <input type="text" value={editedUser.email} onChange={(e) => handleInputChange(e, 'email')} />
            </p>

            <p>
             Mot de passe: <input type="text" value={editedUser.password} onChange={(e) => handleInputChange(e, 'password')} />
            </p>

            <p>
             Bio: <input type="text" className={styles.bio} value={editedUser.bio} onChange={(e) => handleInputChange(e, 'bio')} />
            </p>
            <button onClick={handleSaveClick}>Enregistrer les modifications</button>
          </div>
        ) : (
          <div>
            <p>Email : {props.user.email}</p>
            <p>Points : {props.user.point}</p>
            <p>Bio : {props.user.bio}</p>
            <button onClick={handleEditClick}>Modifier vos informations</button>
          </div>
        )}
      </div>
    );
    /************** */
  } else {
    useEffect(() => {
        navigate("/");
    }, )
  }
}

export default Profil;