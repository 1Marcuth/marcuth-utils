import { Alert, Button } from "react-bootstrap"
import { useState } from "react"

import CopyableText from "../components/copyable-text"
import Footer from "../components/footer"
import Header from "../components/header"

import "../css/password-generator.css"

function generatePassword(
    length,
    allowUpperLetters,
    allowDigits,
    allowSpecialCharacters
) {
    const letters = {
        lower: "abcdefghijklmnopqrstuvwxyz",
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    const digits = "0123456789"
    const specialCharacters = "^!$%&|/\\[](){}:;.,*+-#@<>~"

    let characters = `${letters.lower}`

    if (allowUpperLetters) characters += letters.upper
    if (allowDigits) characters += digits
    if (allowSpecialCharacters) characters += specialCharacters

    function choices(iterable, length) {
        let results = []

        for (let i = 0; i < length; i++) {
            const result = choice(iterable)
            results.push(result)
        }

        function choice(iterable) {
            const randomIndex = Math.floor(Math.random()  * iterable.length)
            return iterable[randomIndex]
        }

        return results
    }

    const results = choices(characters, length)
    const password = results.join("")

    return password
}

function PasswordGenerator() {
    const [ alert, setAlert ] = useState(null)
    const [ passwordLength, setPasswordLength ] = useState(8)

    function generatePasswordHandler(event) {
        const allowUpperLetters = document.querySelector("#allow-upper-letters-field").value === "true"
        const allowDigits = document.querySelector("#allow-digits-field").value === "true"
        const allowSpecialCharacters = document.querySelector("#allow-special-characters-field").value === "true"
    
        if (isNaN(passwordLength) || passwordLength <= 0) {
            setAlert(<Alert variant="danger">Insira um comprimento de senha com um número válido!</Alert>)
            return setTimeout(() => setAlert(null), 2000)
        }

        const password = generatePassword(
            passwordLength,
            allowUpperLetters,
            allowDigits,
            allowSpecialCharacters
        )

        setAlert(<Alert variant="success">Sua senha é: <code><CopyableText>{password}</CopyableText></code></Alert>)
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Gerador de senhas</h1>
                <div className="generator-form-wrapper">
                    <div className="alert-box">{alert}</div>
                    <div className="row">
                        <label htmlFor="password-length-field">Tamanho da senha: {passwordLength}</label>
                        <input
                            type="range"
                            id="password-length-field"
                            min={0}
                            max={64}
                            step={2}
                            value={passwordLength}
                            onInput={(event) => {
                                setPasswordLength(Number(event.target.value))
                                generatePasswordHandler(null)
                            }}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="allow-lower-letters-field">Permitir letras minúsculas (a-z):</label>
                        <select
                            className="form-control"
                            id="allow-lower-letters-field"
                            name="allow-lower-letters-field"
                            disabled
                        >
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </select>
                    </div>
                    <div className="row">
                        <label htmlFor="allow-upper-letters-field">Permitir letras maiúsculas (A-Z):</label>
                        <select
                            className="form-control"
                            id="allow-upper-letters-field"
                            name="allow-upper-letters-field"
                        >
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </select>
                    </div>
                    <div className="row">
                        <label htmlFor="allow-digits-field">Permitir dígitos (0-9):</label>
                        <select
                            className="form-control"
                            id="allow-digits-field"
                            name="allow-digits-field"
                        >
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </select>
                    </div>
                    <div className="row">
                        <label htmlFor="allow-special-characters-field">Permitir caracteres especiais (!-$^+):</label>
                        <select
                            className="form-control"
                            id="allow-special-characters-field"
                            name="allow-special-characters-field"
                        >
                            <option value="true">Sim</option>
                            <option value="false">Não</option>
                        </select>
                    </div>
                    <Button
                        variant="primary"
                        onClick={generatePasswordHandler}
                    >
                        <i className="bi bi-robot"></i>
                        Gerar senha
                    </Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PasswordGenerator