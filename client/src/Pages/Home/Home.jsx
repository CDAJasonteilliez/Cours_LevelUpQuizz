import FormHome from '../../Components/FormHome/FormHome';
import styles from './Home.module.scss';


const Home = (props) => {
    return (
        <>  
            <section className={styles.section}>
                <h1>Bienvenue sur <span><span>L</span>evel <span>U</span>p <span>Q</span>uizz !</span></h1>
                <p>Préparez-vous à vous lancer dans un voyage passionnant de connaissances, de défis et de plaisir.</p>
                <FormHome auth={props.auth} />
            </section>
        </>
    )
}

export default Home;