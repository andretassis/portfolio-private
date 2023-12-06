import styles from './Card.module.css'
import ButtonB from './ButtonB.js'
import {useState} from 'react'


function Card({ img, title, tech, description, repo, site }) {
    const [info, setInfo] = useState(false);

    function render() {
        setInfo(true)
    }
    
    function hide() {
        setInfo(false)
    }

    return (
        <div onMouseLeave={hide} className={styles.card}>
            <a href={site}>
                <img onMouseEnter={render}src={img} alt="Print do projeto" />
            </a>
            {info === true && 
                
            <section>
                <h2>{title}</h2>
                <p><strong>Tecnologias:</strong> {tech}</p>
                <p>{description}</p>
                <a href={repo}><ButtonB text="Ver repositório" /></a>
            </section>
            }
        </div>
    )
}

export default Card