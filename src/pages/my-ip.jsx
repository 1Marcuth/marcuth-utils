import { useEffect, useState } from "react"
import { Alert } from "react-bootstrap"
import axios from "axios"

import CopyableText from "../components/copyable-text"
import Header from "../components/header"
import Footer from "../components/footer"

import "../css/my-ip.css"

function MyIp() {
    const [ ipAddress, setIpAddress ] = useState(null)
    const [ alert, setAlert ] = useState(null)

    useEffect(() => {
        setAlert(<Alert variant="warning">Buscando dados...</Alert>)

        axios.get("https://api.ipify.org?format=json")
            .then(response => {
                setAlert(<Alert variant="success">Sucesso ao buscar os dados!</Alert>)
                const { ip } = response.data
                setIpAddress(ip)
            })
            .catch(error => {
                setAlert(<Alert variant="danger">Ocorreu um erro ao tentar buscar os dados!</Alert>)
                console.log(error)
                return setTimeout(() => setAlert(null), 2000)
            })
    }, [])

    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Meu endereço Ip</h1>
                <div className="alert-box">{alert}</div>
                <p>Seu endereço Ip é: <b><CopyableText>{ipAddress ? ipAddress : "???"}</CopyableText></b></p>
            </div>
            <Footer/>
        </div>
    )
}

export default MyIp