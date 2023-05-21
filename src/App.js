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
import Error404 from "./pages/404"

import "bootstrap/dist/css/bootstrap.css"
import "./css/global.css"
import UrlShortener from "./pages/url-shortener"

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
                <Route path="/*" element={<Error404/>}/>
            </Routes>
        </Router>
    )
}

export default App