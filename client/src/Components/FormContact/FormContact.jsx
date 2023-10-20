import styles from './FormContact.module.scss'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const FormContact = () => {
    const { 
        register,
        formState: { errors },
        handleSubmit 
    } = useForm();

    const onSubmit = (data) => {
        alert(`
        Message envoyé ! \n\n
        Nom : ${data.nom}\n
        Adresse e-mail : ${data.email}\n\n
        Sujet : ${data.sujet}\n\n
        ${data.message}
        `);
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div>
                    <label>Nom</label>
                    <input 
                        type="text"
                        {...register("nom", {
                            required: 'Ce champ doit être remplie.',
                        })} 
                    />
                    <p><ErrorMessage errors={errors} name="nom" /></p>
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
                    <label>Sujet</label>
                    <input 
                        type="text"
                        {...register("sujet", {
                            required: 'Ce champ doit être remplie.',
                        })} 
                    />
                    <p><ErrorMessage errors={errors} name="sujet" /></p>
                </div>
                <div>
                    <label>Votre message</label>
                    <textarea
                        {...register("message", {
                            required: 'Ce champ doit être remplie.',
                            maxLength : {
                                value : 1000,
                                message: "1000 caractères maximum."
                            }
                        })} 
                    ></textarea>
                    <p><ErrorMessage errors={errors} name="message" /></p>
                </div>
                <input type="submit" value="Envoyer" />
                
            </form>
        </>
    )
}

export default FormContact;