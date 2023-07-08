import { useState } from "react"

import AnonymusAd from "../components/anonymus-ad"
import Header from "../components/header"
import Footer from "../components/footer"

import "../css/html-editor.css"

function HtmlEditor() {
    const [ html, setHtml ] = useState("")

    const handleHtmlChange = (event) => {
        setHtml(event.target.value)
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Editor HTML</h1>
                <AnonymusAd/>
                <div className="html-input-wrapper">
                    <h2 className="title">Entrada</h2>
                    <textarea
                        value={html}
                        onChange={handleHtmlChange}
                        className="form-control"
                        placeholder="Digite seu HTML aqui..."
                    />
                </div>
                <div className="html-result-wrapper">
                    <h2 className="title">Resultado</h2>
                    <div dangerouslySetInnerHTML={{ __html: html }}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HtmlEditor