import ReactMarkdown from "react-markdown"
import { useState } from "react"

import AnonymusAd from "../components/anonymus-ad"
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
                <div id="a-ads"/>
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
