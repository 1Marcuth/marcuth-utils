import ReactMarkdown from "react-markdown"
import { useState } from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "../css/markdown-editor.css"

function MarkdownEditor() {
    const [ markdown, setMarkdown ] = useState("")

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value)
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Editor Markdown</h1>
                <iframe data-aa='2234557' src='//acceptable.a-ads.com/2234557' style='border:0px; padding:0; width:100%; height:100%; overflow:hidden; background-color: transparent;'></iframe>
                <div className="markdown-input-wrapper">
                    <h2 className="title">Entrada</h2>
                    <textarea
                        value={markdown}
                        onInput={handleMarkdownChange}
                        placeholder="Digite seu Markdown aqui..."
                        className="form-control"
                    />
                </div>
                <div className="markdown-result-wrapper">
                    <h2 className="title">Resultado</h2>
                    <ReactMarkdown>{markdown}</ReactMarkdown>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MarkdownEditor
