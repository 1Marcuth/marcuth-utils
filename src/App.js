import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import Home from "./pages/home"
import ConsultationCep from "./pages/consultation-cep"
import MyIp from "./pages/my-ip"
import PasswordGenerator from "./pages/password-generator"
import YouTubeVideoTags from "./pages/yt-video-tags"
import CpfGenerator from "./pages/cpf-generator"
import UrlShortener from "./pages/url-shortener"
import YouTubeVideoDownloader from "./pages/yt-video-downloader"
import YouTubeAudioFromVideoDownloader from "./pages/yt-audio-downloader"
import MarkdownEditor from "./pages/makdown-editor"
import HtmlEditor from "./pages/html-editor"
import Error404 from "./pages/404"

import "bootstrap/dist/css/bootstrap.css"
import "./css/global.css"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tools/consultation-cep" element={<ConsultationCep/>}/>
                <Route path="/tools/my-ip" element={<MyIp/>}/>
                <Route path="/tools/password-generator" element={<PasswordGenerator/>}/>
                <Route path="/tools/yt-video-tags" element={<YouTubeVideoTags/>}/>
                <Route path="/tools/cpf-generator" element={<CpfGenerator/>}/>
                <Route path="/tools/url-shortener" element={<UrlShortener/>}/>
                <Route path="/tools/yt-video-downloader/" element={<YouTubeVideoDownloader/>}/>
                <Route path="/tools/yt-audio-downloader/" element={<YouTubeAudioFromVideoDownloader/>}/>
                <Route path="/tools/makdown-editor" element={<MarkdownEditor/>}/>
                <Route path="/tools/html-editor" element={<HtmlEditor/>}/>
                <Route path="/*" element={<Error404/>}/>
            </Routes>
        </Router>
    )
}

export default App