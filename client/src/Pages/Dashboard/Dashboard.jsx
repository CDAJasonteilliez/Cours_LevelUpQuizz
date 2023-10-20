import styles from './Dashboard.module.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import userData from '../../../data/user.json'
import questionData from '../../../data/question.json'


const Dashboard = (props) => {

    const [selectedOption, setSelectedOption] = useState('');
    const [Users, setUsers] = useState(userData.user);
    const [Question, setQuestion] = useState(questionData.question);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswers, setNewAnswers] = useState(['', '', '', '']);
    const [resetPasswordClicked, setResetPasswordClicked] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const handleResetPasswordClick = () => {
      setResetPasswordClicked(true);
  
    };

    const handlePasswordChange = (event) => {
      setNewPassword(event.target.value);
    };

    const resetPassword = () => {
  
      alert("Le mot de passe de l'utilisateur a été réinitialisé.");
      setResetPasswordClicked(false);
    };

    // const AddQuestion = () => {
    //   const randomIndex = Math.floor(Math.random() * 4);
    // }

      // setQuestion([...Question, newQuestionObject]);

      // setNewQuestion('');
      // setNewAnswers(['', '', '', '']);
    

    useEffect(() => {

            const UsersCopy = [...Users];
            UsersCopy.sort();
            setUsers(UsersCopy);
        }, [Users]);

        useEffect(() => {

          const QuestionCopy = [...Question];
          QuestionCopy.sort();
          setQuestion(QuestionCopy);
      }, [Question]);


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      };

      const handleDeleteUser = () => {
        if (selectedUser !== null) {
          const updatedUsers = Users.filter((user) => user.id !== selectedUser.id);
          setUsers(updatedUsers);
          setSelectedUser(null); 
        }
      };

      const handleDeleteQuestion = () => {
        if (selectedQuestion !== null) {
          const updatedQuestion = Question.filter((question) => question.question !== selectedQuestion.question);
          setQuestion(updatedQuestion);
          setSelectedQuestion(null); 
        }
      };

      const Alert = () => {
        alert("Le mot de passe de l'utilisateur a été réinitialisé.")
      };

    const navigate = useNavigate();

    if (props.auth && props.user.rang === "1") {
        

    return (
        <>
        <div className={styles.admin}>
            <h1>Dashboard</h1>
            <label>Sélectionnez une catégorie a modifier</label>
            <br></br>
            <br></br>
            <select aria-labelledby="category-selector select-category" value={selectedOption} onChange={handleSelectChange}>
              <option className={styles.choix} value="">Choisir</option>
              <option className={styles.choix} value="users">Utilisateurs</option>
              <option className={styles.choix} value="questions">Questions</option>
            </select>
            <br></br>
            <br></br>

            {selectedOption === 'users' && (
              <ul>
                {Users.map((user, index) => (
                  <li classname={styles.user} onClick={() => setSelectedUser(user)}  key={index}>
                    
                    <br></br>
                    <strong>{user.id}</strong>
                    <br></br>
                    <br></br>
                    {selectedUser === user ? (
                      <>
                      <button onClick={() => handleDeleteUser(user)}>Bannir l'utilisateur</button>
                      {resetPasswordClicked ? (
                  <>
                  <input
                    type="password"
                    placeholder="Nouveau mot de passe"
                    value={newPassword}
                    onChange={handlePasswordChange}
                  />
                  <button onClick={resetPassword}>Réinitialiser le mot de passe</button>
                </>
              ) : (
                <button onClick={handleResetPasswordClick}>Réinitialisez le mot de passe</button>
              )}
            </>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
            
            {selectedOption === 'questions' && (
             
              <ul>
                {Question.map((question, index) => (
                  <li className={styles.reponse} onClick={() => setSelectedQuestion(question)}  key={index}>
                    <br></br>
                    
                    <strong>Question : </strong>{question.question}
                    {/* {console.log(question.choice)} */}
                    <br></br>
                    <br></br>
                    <strong>Réponses : </strong>
                    <br></br>
                    <br></br>
                    <ul>
                      {question.choice.map((choice, choiceIndex) => (
                        <li key={choiceIndex}>{choice.answer}</li>
                      )
                      
                      )}
                    </ul>
                    
                    <br></br>
                    
                    {selectedQuestion === question ? (
                      <button onClick={() => handleDeleteQuestion(question)}>Supprimer la question</button>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}

            
           
          </div>
        </>
      );

            
        
    



    } else {
        useEffect(() => {
            navigate("/");
        })
    }
}

export default Dashboard;