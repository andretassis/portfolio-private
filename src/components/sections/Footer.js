
import styles from "./Footer.module.css"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <a href="https://www.instagram.com/andretassis/"><li><FaInstagram size={30} /></li></a>
                <a href="https://www.linkedin.com/in/andretassis/"><li><FaLinkedin size={30} /></li></a>
                <a href="https://github.com/andretassis"><li><FaGithub size={30} /></li></a>
            </ul>
            <p>tassisandre@gmail.com</p>
            <p>Andre Tassis © 2023</p>
        </div>
    )
}

export default Footer