import { Alert, Button } from "react-bootstrap"
import { useState } from "react"

import CopyableText from "../components/copyable-text"
import AnonymusAd from "../components/anonymus-ad"
import Footer from "../components/footer"
import Header from "../components/header"

import "../css/cpf-generator.css"


function generateCpf(withDot) {
    const number1 = generateRandomNumber()
    const number2 = generateRandomNumber()
    const number3 = generateRandomNumber()

    const digit1 = calculateDigit(number1, number2, number3)
    const digit2 = calculateDigit(number1, number2, number3, digit1)

    if (withDot) return `${number1}.${number2}.${number3}-${digit1}${digit2}`
    return `${number1}${number2}${number3}${digit1}${digit2}`

    function generateRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 999)
        return String(randomNumber).padStart(3, "0")
    }

    function calculateDigit(number1, number2, number3, number4) {
        const numbers = number1
            .split("")
            .concat(
                number2.split(""),
                number3.split("")
            )
    
        if (number4) numbers[9] = number4
    
        let sum = 0
        let initialIndex = (number4) ? 11 : 10
    
        for (let i = initialIndex, j = 0; i >= 2; i--, j++) {
            sum += Math.floor(Number(numbers[j]) * i)
        }
    
        const remainder = sum % 11

        return (remainder < 2) ? 0 : 11 - remainder
    }
}

function CpfGenerator() {
    const [ alert, setAlert ] = useState(null)

    function generateCpfHandler(event) {
        const withDot = document.querySelector("#with-dot-field").value === "true"
        const cpf = generateCpf(withDot)

        setAlert(<Alert variant="success">O CPF gerado foi: <code><CopyableText>{cpf}</CopyableText></code></Alert>)
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Gerador de CPF</h1>
                <AnonymusAd/>
                <div className="cpf-generator-wrapper">
                    <div className="alert-box">{alert}</div>
                    <div className="row">
                        <label htmlFor="with-dot-field">Com pontuação:</label>
                        <select className="form-control" name="with-dot-field" id="with-dot-field">
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </select>
                    </div>
                    <Button onClick={generateCpfHandler}>
                        Gerar cpf
                    </Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CpfGenerator