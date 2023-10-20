import React, { useState, useEffect } from 'react';
import userData from '../../../data/user.json'
import styles from './Classement.module.scss'
// import Gold from '../images/Gold.png';
// import Silver from '../images/Silver.png';
// import Bronze from '../images/Bronze.png';

const Classement = () => {

    const [sortedUsers, setSortedUsers] = useState(userData.user);
  
    useEffect(() => {
      
      const sortUsersByPoints = () => {
        const sortedUsersCopy = [...sortedUsers];
        sortedUsersCopy.sort((a, b) => b.point - a.point);
        setSortedUsers(sortedUsersCopy.slice(0, 10));
      };

      sortUsersByPoints(); // Triez les utilisateurs au chargement initial
  }, []);
  
  return (
    <div className={styles.Classement}>
      <h1>Classement</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Position</th>
            <th>Nom</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Classement;