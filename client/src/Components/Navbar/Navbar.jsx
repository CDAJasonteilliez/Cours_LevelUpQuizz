import { Link , useNavigate } from "react-router-dom";
import styles from './Navbar.module.scss';
import logo from '../../assets/Logo_LevelUpQuizz.png';
import { useState } from "react";

const Navbar = (props) => {
    const [isBurgerOpen, setBurgerOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        props.setUser("")
        props.setAuth(false)
        navigate("/");
    }

    const handlerBurger = () => {
        setBurgerOpen(!isBurgerOpen)
    }

    const closeBurber = () => {
        setBurgerOpen(false)
    }

    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <Link to="/"><img src={logo} alt="Logo - level up quizz" /></Link>
                </div>
                <div className={`
                ${styles.menu}
                ${isBurgerOpen ? styles.active : ""}
                `}>
                    <Link to="/">Accueil</Link>
                    <Link to="/Classement">Classement</Link>
                    { props.auth ? "" : <Link to="/Connexion">Connexion</Link> }
                    { props.auth ? "" : <Link to="/Inscription">Inscription</Link> }
                    { props.auth ? <Link to="/Profil">Profil</Link> : "" }
                    { props.auth ? props.user.rang === "1" ? <Link to="/dashboard">Dashboard</Link>: "" : "" }
                    { props.auth ? <button onClick={handleLogout}>Deconnexion</button> : "" } 
                </div>
                <div className={`
                ${styles.menuBurger}
                ${isBurgerOpen ? styles.active : ""}
                `} 
                onClick={handlerBurger}
                tabIndex="0"
                onBlur={closeBurber}
                >
                    <div></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;