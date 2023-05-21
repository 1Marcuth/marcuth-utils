import { Button, Alert } from "react-bootstrap"
import { useEffect, useState } from "react"
import consultCep from "cep-promise"

import Footer from "../components/footer"
import Header from "../components/header"

import "../css/consultation-cep.css"

function ConsultationCep() {
    const [ cepData, setCepData ] = useState(null)
    const [ alert, setAlert ] = useState(null)

    useEffect(() => {

    }, [])

    function consultCepHandler(event) {
        const cep = document.querySelector("#cep-field").value.trim()
        
        if (cep === "") {
            return setAlert(<Alert variant="danger">Insira um cep válido!</Alert>)
        }

        setAlert(<Alert variant="warning">Buscando dados...</Alert>)

        consultCep(cep)
            .then(data => {
                setAlert(<Alert variant="success">Sucesso ao buscar os dados!</Alert>)
                setCepData(data)
            })
            .catch(error => {
                setAlert(<Alert variant="danger">Ocorreu um erro ao tentar buscar os dados!</Alert>)
                console.log(error)
                return setTimeout(() => setAlert(null), 2000)
            })
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Consulta de cep</h1>
                <div className="consult-form-wrapper">
                <div id="alert-box">{alert}</div>
                    <div className="row">
                        <label
                            className="form-label"
                            htmlFor="cep-field"
                        >
                            Cep:
                        </label>
                        <input
                            placeholder="Insira seu cep aqui..."
                            className="form-control"
                            id="cep-field"
                            type="text"
                        />
                    </div>
                    <Button onClick={consultCepHandler}>
                        <i className="bi bi-send"></i>
                        Consultar cep
                    </Button>
                </div>

                {cepData && (
                    <div className="cep-data-box">
                        <ul>
                            <span className="title">Dados do cep</span>
                            <li><b>Cep:</b> {cepData.cep ? cepData.cep : "Desconhecido"}</li>
                            <li><b>Estado:</b> {cepData.sate ? cepData.sate : "Desconhecido"}</li>
                            <li><b>Cidade:</b> {cepData.city ? cepData.city : "Desconhecida"}</li>
                            <li><b>Bairro:</b> {cepData.neighborhood ? cepData.neighborhood : "Desconhecido"}</li>
                            <li><b>Rua:</b> {cepData.street ? cepData.street : "Desconhecida"}</li>
                            <li><b>Serviço:</b> {cepData.service ? cepData.service : "Desconhecido"}</li>
                        </ul>
                    </div>
                )}
                
            </div>
            <Footer/>
        </div>
    )
}

export default ConsultationCep