import styles from './ML.module.scss'

const ML = () => {
    return (
        <>
            <section className={styles.section}>
                <h1>Mention légal</h1>
                <div>
                    <p>
                        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
                        pour la confiance en l'économie numérique, il est précisé aux
                        utilisateurs du site GameStorm l'identité des différents
                        intervenants dans le cadre de sa réalisation et de son suivi.
                    </p>
                    <h2>Edition du site</h2>
                    <p>
                        Le présent site, accessible à l'URL levelupquizz.fr (le « Site »),
                        est édité par :
                    </p>
                    <p>
                        xxxxxx, 00 rue yyyyy 62138 zzzzzz,
                    </p>
                    <h2>Hébergement</h2>
                    <p>
                        Le Site est hébergé par la xxxxxx, 00 rue yyyyy 62138 zzzzzz.
                    </p>
                    <h2>Directeur de publication</h2>
                    <p>Le Directeur de la publication du Site est Jason Teilliez.</p>
                    <h2>Nous contacter</h2>
                    <p>Par téléphone : +33600000000</p>
                    <p>Par email : xxxxx@levelupquizz.fr</p>
                    <p>Par courrier : xxxxxx, 00 rue yyyyy 62138 zzzzzz</p>
                    <h2>Données personnelles</h2>
                    <p>
                        Le traitement de vos données à caractère personnel est régi par
                        notre politique de confidentialité, disponible depuis la section
                        "Politique de confidentialité", conformément au Règlement Général
                        sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
                    </p>
                </div>
            </section>
        </>
    )
}

export default ML;

