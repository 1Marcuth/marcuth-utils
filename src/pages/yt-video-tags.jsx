import { Alert, Button } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"

import CopyableText from "../components/copyable-text"
import Footer from "../components/footer"
import Header from "../components/header"

import "../css/yt-video-tags.css"

async function scrapeYoTubeVideoKeywords(url) {
    const response = await axios.get(
        "https://marcuth-utils-api.fly.dev/scraping/youtube/video/details/",
        { params: { url } }
    )

    const videoKeywords = response.data.keywords
    return videoKeywords
}

function YouTubeVideoTags() {
    const [ tags, setTags ] = useState(null)
    const [ alert, setAlert ] = useState(null)

    function getVideoTagsHandler() {
        const url = document.querySelector("#video-url-field").value.trim()

        if (url === "") {
            return setAlert(<Alert variant="danger">Insira uma url válida!</Alert>)
        }

        setAlert(<Alert variant="warning">Buscando dados...</Alert>)

        scrapeYoTubeVideoKeywords(url)
            .then(data => {
                setAlert(<Alert variant="success">Sucesso ao buscar os dados!</Alert>)
                setTags(data)
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
                <h1>Tags de um vídeo do YouTube</h1>
                <div className="tags-fetcher-wrapper">
                    <div className="alert-box">{alert}</div>
                    <div className="row">
                        <label htmlFor="video-url-field">Url do vídeo:</label>
                        <input className="form-control" id="video-url-field" type="url"/>
                    </div>
                    <Button onClick={getVideoTagsHandler}>
                        <i className="bi bi-send"></i>
                        Pegar tags
                    </Button>
                </div>
                {tags && (
                    <div className="tags-data-box">
                        <span className="title">Tags</span>
                        <code><CopyableText>{tags.join(", ")}</CopyableText></code>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}

export default YouTubeVideoTags