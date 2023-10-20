import styles from './FormConnexion.module.scss'
import dataUser from '../../../data/user.json'
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const FormConnexion = (props) => {
    const navigate = useNavigate();

    const { 
        register,
        formState: { errors },
        handleSubmit 
    } = useForm();

    const onSubmit = (data) => {
        for(let utilisateur of dataUser.user) {
            if (utilisateur.id === data.id && utilisateur.password === data.password) {
                props.setUser(utilisateur)
                props.setAuth(true)
                navigate("/")
            }
        }
        const pErreur = document.getElementById("erreur");
        pErreur.textContent = "Identifiant ou mot de passe incorrect !"
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p className={styles.ErrorMessage} id="erreur"></p>
                <div>
                    <label>Identifiant :</label>
                    <input 
                        type="text"
                        {...register("id", {
                            required: 'Ce champ doit être remplie.',
                        })} 
                    />
                    <p><ErrorMessage errors={errors} name="id" /></p>
                </div>

                <div>
                    <label>Mot de Passe :</label>
                    <input 
                        type="password"
                        {...register("password", {
                            required: 'Ce champ doit être remplie.',
                        })} 
                    />
                    <p><ErrorMessage errors={errors} name="password" /></p>
                </div>
                <input type="submit" value="Se connecter"/>
                <p>Vouz n'avez pas de compte ? <Link to="/inscription">Inscrivez-vous</Link></p>
            </form>
        </>
    )
}

export default FormConnexion;