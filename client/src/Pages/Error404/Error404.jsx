import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import styles from './Error404.module.scss'
import { Link } from "react-router-dom";
import logo from "../../assets/Logo_LevelUpQuizz.png";

const Error404 = () => {
    return (
        <>
            <div className={styles.e404}>
                <Navbar />
                <main>
                    <section>
                        <h1>
                            Oops ! on dirait que vous vous êtes égarés.
                        </h1>
                        <Link to="/">Retourner à l'Accueil</Link>
                        <Link to="/"><img src={logo} alt="Logo Level Up Quizz" /></Link>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Error404;