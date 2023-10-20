import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Quizz.module.scss';
import data from '../../../data/question.json';

const Quizz = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(location.state.categorie); // État pour stocker la catégorie sélectionnée



    useEffect(() => {
        setQuestions(data.question); // Charger toutes les questions depuis le fichier JSON
    }, []);

    // Filtrer les questions en fonction de la catégorie sélectionnée
    const filteredQuestions = selectedCategory === "all"
        ? questions
        : questions.filter(question => question.categorie === selectedCategory);


    // Mélanage aléatoire des questions filtrées
    const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5);

    console.log(data);
    const handleAnswerClick = (selectedOption) => {
        if (selectedOption.value === "true") {
            setScore(score + 1);
        }

        // Vérifier si c'est la dernière question
        if (currentQuestionIndex === questions.length - 1) {
            setQuizCompleted(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    useEffect(() => {
        if (!props.auth) {
            navigate("/");
        }
    }, [props.auth, navigate]);


    if (props.auth) {
        if (quizCompleted) {
            return (
                <div className={styles.questionContainer}>
                    <h2 className={styles.titleQuestion}>Quizz Complet</h2>
                    <p className={styles.titleQuestion}>Votre score : {score}/{data.question.length}</p>
                </div>
            );
        } else if (currentQuestionIndex < shuffledQuestions.length) {
            const currentQuestion = shuffledQuestions[currentQuestionIndex];

            return (
                <div className={styles.questionContainer}>
                    <h1 className={styles.titleQuestion}>Bonne Chance !! </h1>

                    <h3 className={styles.titleCategorie}>{currentQuestion.categorie}</h3>
                    <h1 className={styles.questionNumero}>Question {currentQuestionIndex + 1}</h1>
                    <h3 className={styles.titleQuestion}>{currentQuestion.question}</h3>
                    <ul className={styles.buttonSelect}>
                        {currentQuestion.choice.map((option, index) => (
                            <div className={styles.buttonContainer}>
                                <button key={index} onClick={() => handleAnswerClick(option)} className={styles.buttonQuestion}>
                                    {option.answer}
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
            );
        } else {
            // Le quiz est termine

            return <div className={styles.questionContainer}>
                <h2 className={styles.titleQuestion}>Quizz Terminé</h2>
                <p className={styles.titleQuestion}>Votre score pour la catégorie "{selectedCategory}"</p>
                <p className={styles.titleQuestion}>{score} sur {filteredQuestions.length}</p>
            </div>
        }
    } else {
        return null; // Ou affichez un message de chargement ici si nécessaire
    }
}

export default Quizz;
