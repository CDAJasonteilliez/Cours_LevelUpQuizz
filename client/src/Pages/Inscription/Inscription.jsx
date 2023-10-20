import FormInscription from '../../Components/FormInscription/FormInscription';
import styles from './Inscription.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Inscription = (props) => {
    const navigate = useNavigate();
    if (!props.auth) {
    return (
        <> 
            <section className={styles.section}>
                <h1>S'inscrire</h1>
                <FormInscription />
            </section>
        </>
    )
    } else {
        useEffect(() => {
            navigate("/");
        })
    }
}

export default Inscription;