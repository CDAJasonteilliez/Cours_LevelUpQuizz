import { Link } from "react-router-dom";
import styles from './Footer.module.scss';
import logo from '../../assets/Logo_LevelUpQuizz.png';

const Footer = () => {

    return (
        <>
            <footer className={styles.footer}>
                <div>
                    <div>
                        <div>
                            <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
                            <Link to="/condition-ceneral-utilisation">Condition général d'utilisation</Link>
                        </div>
                        <div>
                            <Link to="/mention-legal">Mention légal</Link>
                            <Link to="/contact">Nous contactez</Link>
                        </div>
                    </div>
                    <div>
                        <Link  to="/"><img src={logo} alt="Logo - level up quizz" /></Link>
                    </div>
                    <div>
                        <i className={`fa-brands fa-discord`}></i>
                        <i className={`fa-brands fa-instagram`}></i>
                        <i className={`fa-brands fa-x-twitter`}></i>
                        <i className={`fa-brands fa-facebook`}></i>
                    </div>
                </div>
                <div>
                    <p>Copyright &copy; 2023 LevelUpQuizz</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;