import Card from "../elements/Card"
import tabuada from '../assets/projeto-tabuada.svg'
import lpccxp from '../assets/projeto-lp-ccxp.svg'
import flexibank from '../assets/projeto-flexibank.svg'
import apicep from '../assets/projeto-api-cep.svg'
import crud from '../assets/projeto-crud.svg'

function Projects() {
    return (
        <div id="projects">
            <h1>Projetos</h1>
            <Card
                img={tabuada}
                title="Calculadora para tabuada"
                tech="HTML, CSS e JavaScript"
                description="O projeto consiste em uma calculadora de tabuada. O usuário digita o número que será calculada a tabuada e também o número máximo de vezes que será feita a operação. O sistema mostra na tela, linha a linha, os valores das operações e seus respectivos resultados."
                repo="https://github.com/andretassis/tabuada"
                site="https://classy-melba-141347.netlify.app/"
            />
            <Card
                img={lpccxp}
                title="Landing Page - CCXP"
                tech="HTML, CSS e JavaScript"
                description="Projeto de uma landing page para a CCXP 2022."
                repo="https://github.com/andretassis/landing-page-ccxp"
                site="https://landingpage-ccxp22.netlify.app/"
            />
            <Card
                img={flexibank}
                title="FlexiBank"
                tech="HTML, CSS e JavaScript"
                description="Projeto de página para o banco digital fictício Flexibank. O objetivo foi desenvolver validações de formulário de abertura de conta, com acesso à câmera do usuário e função de tirar foto."
                repo="https://github.com/andretassis/flexibank"
                site="https://flexibank.vercel.app/"
            />
            <Card
                img={apicep}
                title="Consumo de API - ViaCEP"
                tech="HTML, CSS e JavaScript"
                description="Consumo de dados da API ViaCEP para preenchimento automático de formulários."
                repo="https://github.com/andretassis/consumo-api-viacep"
                site="https://consumo-api-viacep.vercel.app/"
            />
            <Card
                img={crud}
                title="CRUD - Cadastro de produto"
                tech="HTML, CSS, JavaScript e ReactJS"
                description="Tela para o usuário cadastrar um produto com armazenamento de dados no localStorage."
                repo="https://github.com/andretassis/crud-produto"
                site="https://crud-produto.vercel.app/"
            />

        </div>
    )
}

export default Projects