import { Link } from "react-router-dom"

import AnonymusAd from "../components/anonymus-ad"
import Footer from "../components/footer"
import Header from "../components/header"

import "../css/home.css"

function Home() {
    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Marcuth Utils</h1>
                <img className="main-icon" src="https://cdn.discordapp.com/attachments/1042970956928397315/1110225420344905778/Digital_tools-pana.svg" alt="Home icon"/>
                <div className="box">
                    <p>Bem-vindo ao Marcuth Utils - seu destino online para uma ampla gama de ferramentas e utilitários! Estamos entusiasmados em apresentar a você uma plataforma abrangente, projetada para tornar a sua vida mais fácil e eficiente.</p>
                    <p>Sabemos que, no mundo moderno, todos nós enfrentamos uma série de tarefas diárias que podem consumir nosso tempo e energia. É por isso que criamos o Marcuth Utils, um site repleto de recursos que visam simplificar seu dia a dia e maximizar sua produtividade.</p>
                    <p>Além disso, oferecemos uma variedade de ferramentas de produtividade para ajudá-lo a organizar sua vida, melhorar suas habilidades de gerenciamento de tempo e facilitar o trabalho remoto. Nossa intenção é fornecer soluções práticas e eficazes para atender às suas necessidades diárias, tanto pessoais quanto profissionais.</p>
                    <AnonymusAd/>
                    <p>No Marcuth Utils, valorizamos a simplicidade e a usabilidade. Nossas ferramentas são projetadas com uma interface intuitiva e amigável, para que você possa começar a usá-las imediatamente, sem complicações. Além disso, priorizamos a segurança e a confidencialidade dos seus dados, garantindo que suas informações estejam protegidas e mantidas em total sigilo.</p>
                    <p>Como equipe, estamos empenhados em fornecer constantemente atualizações e aprimoramentos para oferecer uma experiência cada vez melhor. Valorizamos o feedback dos nossos usuários e estamos sempre abertos a sugestões para melhorar ainda mais nossas ferramentas e adicionar recursos que sejam relevantes para você.</p>
                    <p>Então, não perca mais tempo procurando por soluções fragmentadas. Explore o Marcuth Utils hoje mesmo e descubra como nossas ferramentas podem simplificar sua vida, aprimorar sua produtividade e ajudá-lo a alcançar o sucesso em suas tarefas diárias. Estamos aqui para ajudá-lo a se destacar e alcançar o máximo potencial.</p>
                </div>
                <hr/>
                <h2>Lista de utilitários</h2>
                <div className="box">
                    <ul className="utils-list">
                        <li>
                            <Link to="/tools/makdown-editor">Editor markdown</Link>
                        </li>
                        <li>
                            <Link to="/tools/html-editor">Editor HTML</Link>
                        </li>
                        <li>
                            <Link to="/tools/consultation-cep">Consuta de cep</Link>
                        </li>
                        <li>
                            <Link to="./">Rastreamento de encomendas</Link>
                        </li>
                        <li>
                            <Link to="/tools/my-ip">Meu endereço Ip</Link>
                        </li>
                        <li>
                            <Link to="/tools/password-generator">Gerador de senhas</Link>
                        </li>
                        <li>
                            <Link to="/tools/cpf-generator">Gerador de CPF</Link>
                        </li>
                        <li>
                            <Link to="/tools/url-shortener">Encurtador de url (nativo)</Link>
                        </li>
                        <li>
                            <Link to="https://kessurl.vercel.app/">Encurtador de url (KessURL)</Link>
                        </li>
                        <li>
                            <Link target="_blank" to="https://ytdl.fun/">Baixar vídeo do YouTube</Link>
                        </li>
                        <li>
                            <Link target="_blank" to="https://ytdl.fun/">Baixar aúdio de um vídeo do YouTube</Link>
                        </li>
                        <li>
                            <Link to="/tools/yt-video-tags">Tags de um vídeo do YouTube</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home