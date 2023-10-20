import styles from "./Layout.module.scss"
import {useLocation, Outlet} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useState } from "react";
import CookieAlert from "../Components/CookieAlert/CookieAlert";



const Layout = (props) => {
    const {pathname} = useLocation();
    const [cookie, setCookie] = useState(false);

    return (
        <> 
            <div className={styles.layout}>
                {cookie ? "":<CookieAlert setCookie={setCookie} />}
                
                <Navbar user={props.user} auth={props.auth} setUser={props.setUser} setAuth={props.setAuth}/>
                <main>
                    { pathname === "/" ? <Home auth={props.auth} /> : <Outlet /> }
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout;