import { Button, Alert } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"

import CopyableText from "../components/copyable-text"
import Footer from "../components/footer"
import Header from "../components/header"

import "../css/url-shortener.css"

async function shortenUrl(url) {
    const response = await axios.get(`https://cdpt.in/shorten?url=${url}`)
    const shortedUrl = response.data
    return shortedUrl
}

function UrlShortener() {
    const [ alert, setAlert ] = useState(null)

    function shortenUrlHandler(event) {
        const url = document.querySelector("#url-field").value.trim()

        if (url === "") {
            return setAlert(<Alert variant="danger">Insira uma url válida!</Alert>)
        }

        setAlert(<Alert variant="warning">Encurtando sua url...</Alert>)
        
        shortenUrl(url)
            .then(shortedUrl => {
                setAlert(<Alert variant="success">Sua url foi encurtada com sucesso! <code><CopyableText>{shortedUrl}</CopyableText></code></Alert>)
            })
            .catch(error => {
                setAlert(<Alert variant="danger">Ocorreu um erro ao tentar encurar sua url!</Alert>)
            })
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Encurtador de Url</h1>
                <ins class="surfe-be" data-sid="377729"></ins>
                <div className="url-shortener-wrapper">
                    <div className="alert-box">{alert}</div>
                    <div className="row">
                        <label htmlFor="url-field">Url:</label>
                        <input placeholder="Insira sua url aqui..." className="form-control" type="url" name="url-field" id="url-field"/>
                    </div>
                    <Button variant="primary" onClick={shortenUrlHandler}>
                        <i className="bi bi-scissors"></i>
                        Encurtar url
                    </Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UrlShortener