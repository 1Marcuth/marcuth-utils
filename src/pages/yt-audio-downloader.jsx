import { Alert, Button } from "react-bootstrap"
import { useState } from "react"

import Footer from "../components/footer"
import Header from "../components/header"

import "../css/yt-video-downloader.css"

function YouTubeAudioFromVideoDownloader() {
    const [ alert, setAlert ] = useState(null)

    function downloadAudioFromVideoHandler(event) {
        const url = document.querySelector("#url-field").value.trim()

        if (url === "") {
            return setAlert(<Alert variant="danger">Insira uma url válida!</Alert>)
        }

        setAlert(<Alert variant="warning">Enviando a sua url...</Alert>)

        window.open(`https://marcuth-utils-api.fly.dev/scraping/youtube/video/audio/?url=${url}`)

        setAlert(<Alert variant="success">Url enviada com sucesso!</Alert>)
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Baixar áudio de um vídeo do YouTube</h1>
                <div className="video-downloader-wrapper">
                    <div className="alert-box">{alert}</div>
                    <div className="row">
                        <label htmlFor="url-field">Url:</label>
                        <input id="url-field" name="url-field" className="form-control" type="url"/>
                    </div>
                    <Button
                        variant="primary"
                        onClick={downloadAudioFromVideoHandler}
                    >
                        Baixar vídeo
                    </Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default YouTubeAudioFromVideoDownloader