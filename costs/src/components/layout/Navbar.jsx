import { Link } from "react-router-dom"

import Container from "./Container"

import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar (){
    return(
        <nav className={styles.navbar}>
            <Container customClass="navbar">
                <Link to="/"><img src={logo} alt="logo da costs" /></Link>
                <ul className={styles.list}>
                    <li className={styles.iten}>
                        <Link to="/" >Home</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to="/projects" >Projetos</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to="/company" >Empresa</Link>
                    </li>
                    <li className={styles.iten}>
                        <Link to="/contact" >Contato</Link>
                    </li>
                        {/* <Link to="/newproject" >Novo Projeto</Link> */}
                </ul>
            </Container>

        </nav>
    )
}
export default Navbar