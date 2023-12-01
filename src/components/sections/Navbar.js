import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Nav } from 'react-bootstrap';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href="#presentation">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#skills">Habilidades</Nav.Link></li>
                <li><Nav.Link href="#projects">Projetos</Nav.Link></li>
            </ul>
            <ul>
                <a href="https://www.instagram.com/andretassis/"><li><FaInstagram size={30} /></li></a>
                <a href="https://www.linkedin.com/in/andretassis/"><li><FaLinkedin size={30} /></li></a>
                <a href="https://github.com/andretassis"><li><FaGithub size={30} /></li></a>
            </ul>
        </div >
    )
}

export default Navbar