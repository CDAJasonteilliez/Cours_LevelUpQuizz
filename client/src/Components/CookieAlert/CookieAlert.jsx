import styles from './CookieAlert.module.scss';

const CookieAlert = (props) => {
    return (
        <div className={styles.cookieAlert}>
            <div>
                <div>
                    <p>Pour améliorer votre expérience, nous (et nos partenaires) stockons et/ou accédons à des informations sur votre terminal (cookie ou équivalent) avec votre accord pour tous nos sites et applications, sur vos terminaux connectés.</p>
                    <p>Notre site Web peut utiliser ces cookies pour :</p>
                    <ul>
                        <li>Mesurer l'audience de la publicité sur notre site, sans profilage</li>
                        <li>Afficher des publicités personnalisées basées sur votre navigation et votre profil</li>
                        <li>Personnaliser notre contenu éditorial en fonction de votre navigation</li>
                        <li>Vous permettre de partager du contenu sur les réseaux sociaux ou les plateformes présents sur notre site Internet</li>
                    </ul>
                </div>
                <div>
                    <button onClick={()=> {props.setCookie(true)}}>Tout accepter</button>
                    <button onClick={()=> {props.setCookie(true)}}>Tout rejeter</button>
                </div>
            </div>
        </div>
    )
}

export default CookieAlert;







