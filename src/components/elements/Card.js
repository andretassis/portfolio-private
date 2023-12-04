import styles from './Card.module.css'
import ButtonB from './ButtonB.js'


function Card({ img, title, tech, description, repo, site }) {
    return (
        <div className={styles.card}>
            <a href={site}>
                <img src={img} alt="Print do projeto" />
            </a>
            <section>
                <h2>{title}</h2>
                <p><strong>Tecnologias:</strong> {tech}</p>
                <p>{description}</p>
                <a href={repo}><ButtonB text="Ver repositório" /></a>
            </section>
        </div>
    )
}

export default Card