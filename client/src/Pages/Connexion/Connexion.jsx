import styles from './Connexion.module.scss'
import FormConnexion from '../../Components/FormConnexion/FormConnexion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Connexion = (props) => {
    const navigate = useNavigate();
    if (!props.auth) {
        return (
            <>
                <section className={styles.section}>
                    <h1>Se connecter</h1>
                    <FormConnexion setUser={props.setUser} setAuth={props.setAuth}/>
                </section>
            </>
        )
    } else {
        useEffect(() => {
            navigate("/");
        })
    }
}

export default Connexion;