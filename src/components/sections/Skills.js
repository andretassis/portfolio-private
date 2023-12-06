import styles from './Skills.module.css'
import javascript from '../assets/javascript.svg'
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import react from '../assets/react.svg'

function Skills() {
    return (
        <div id="skills" className={styles.skills}>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            {/* <div> */}
            <img src={javascript} alt="JavaScript" />
            <img src={html} alt="HTML" />
            <img src={css} alt="CSS" />
            <img src={react} alt="ReactJS" />
            {/* </div> */}
        </div >
    )
}

export default Skills