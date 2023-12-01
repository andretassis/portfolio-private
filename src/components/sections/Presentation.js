import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
import styles from './Presentation.module.css'

function Presentation() {
    return (
        <div className={styles.presentation} id="presentation">
            <h4>Seja bem-vindo e bem-vinda ao meu Portfólio</h4>
            <h1>Olá, eu sou Andre!</h1>
            <p>Sou Andre Tassis, um desenvolvedor front-end apaixonado por aprender coisas novas e enfrentar desafios. Com habilidades em HTML, CSS, Bootstrap, JavaScript, TypeScript, React.js e Angular, estou preparado para criar experiências web envolventes e responsivas.<br /> Além disso, possuo conhecimento em nas metodologias de gestão de projetos Kanban e SCRUM. Cada projeto para mim é uma oportunidade de aprendizado. Tenho experiência em projetos como desenvolvimento de CRUD, consumo de dados de API e criação de projetos dinâmicos e interativos.</p>
            <ButtonA link="https://github.com/andretassis" text="Conecte-se comigo!" />
        </div>
    )
}

export default Presentation