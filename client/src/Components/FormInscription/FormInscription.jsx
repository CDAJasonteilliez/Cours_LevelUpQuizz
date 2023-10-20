import styles from './FormInscription.module.scss';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate, Link } from 'react-router-dom';

const FormInscription = () => {
    const navigate = useNavigate();

    const { 
        register,
        watch,
        formState: { errors },
        handleSubmit 
    } = useForm();

    const onSubmit = (data) => {
        alert(`Bienvenue parmis nous ${data.id} !`);
        navigate("/connexion");
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div>
                    <label>Nom d'utilisateur</label>
                    <input 
                        type="text"
                        {...register("id", {
                            required: 'Ce champ doit être remplie.',
                            minLength : {
                                value: 3,
                                message: '3 caractères minimum.'
                            },
                            maxLength : {
                                value : 20,
                                message: "20 caractères maximum."
                            }
                        })} 
                    />
                    <p><ErrorMessage errors={errors} name="id" /></p>
                    {/* <p>{errors.id && errors.id.message}</p> */}
                </div>
                <div>
                    <label>Adresse E-mail</label>
                    <input 
                        type="text"
                        {...register("email", {
                            required: 'Ce champ doit être remplie',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Veuillez entrer une adresse mail valide.',
                            },
                        })} 
                    />
                    <p><ErrorMessage errors={errors} name="email" /></p>
                </div>
                <div>
                    <label>Mot de Passe</label>
                    <input 
                        type="password"
                        {...register("password", {
                            required: 'Ce champ doit être remplie.',
                            minLength : {
                                value: 8,
                                message: '8 caractères minimum.'
                            },
                            maxLength : {
                                value : 20,
                                message: "20 caractères maximum."
                            }
                        })} 
                    />
                    <p><ErrorMessage errors={errors} name="password" /></p>
                </div>
                <div>
                    <label>Confirmer mot de passe</label>
                    <input 
                        type="password"
                        {...register("conf", {
                            required: 'Ce champ doit être remplie.',
                            validate: value => value === watch("password") || 'Mot de passe différent.'
                            }
                        )} 
                    />
                    <p><ErrorMessage errors={errors} name="conf" /></p>
                </div>
                <div className={styles.checkbox}>
                    <div>
                        <input type="checkbox" {...register("rgpd", {
                                required: 'Vous devez accepté les CGU et politique de confidentialité.',
                                }
                            )}  />
                        <label>
                            J'ai lu et approuve les <Link to="/condition-ceneral-utilisation">Conditions générals d'utilisation</Link> et <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
                        </label>
                    </div>
                    <p><ErrorMessage errors={errors} name="rgpd" /></p>
                </div>
                <input type="submit" value="S'inscrire" />
                <p>Vous avez déjà un compte ? <Link to="/connexion">Connectez-vous</Link></p>
            </form>
        </>
    )
}

export default FormInscription;