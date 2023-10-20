import FormContact from '../../Components/FormContact/FormContact';
import styles from './Contact.module.scss';

const Contact = () => {

    return (
        <>
            <section className={styles.section}>
                <h1>Contact</h1>
                <FormContact />
            </section>
        </>
    )
}

export default Contact;