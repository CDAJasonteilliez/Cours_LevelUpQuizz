import styles from './FormHome.module.scss'
import dataUser from '../../../data/user.json'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const FormHome = (props) => {
    const categories = [
        {
            text: "All",
            id: "all"
        },
        {
            text: "Jeu video",
            id: "Jeux video"
        },
        {
            text: "Anime",
            id: "Animes"
        },
        {
            text: "Harry Potter",
            id: "Harry Potter"

        }
    ]
    const navigate = useNavigate();

    const {
        register,
        handleSubmit
    } = useForm();

    const onSubmit = (data) => {


        if (props.auth) {
            navigate("/quizz", { state: { categorie: data.categorie } })
        } else {
            const pErreur = document.getElementById("erreur");
            pErreur.textContent = "Connectez-vous pour jouer !";
        }
    };
    return (
        <>
            <div className={styles.formHome}>
                <p className={styles.erreur} id="erreur"></p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h2>Sélectionner votre catégorie</h2>
                        <div>
                            {categories.map((el, index) => {
                                return (
                                    <div key={index}>
                                        {index === 0 ? <input type="radio" {...register("categorie")} value={el.id} id={el.id} defaultChecked /> : <input type="radio" {...register("categorie")} value={el.id} id={el.id} />}
                                        <label htmlFor={el.id}>{el.text}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Play" />
                    </div>

                </form>
            </div>
        </>
    )
}

export default FormHome;