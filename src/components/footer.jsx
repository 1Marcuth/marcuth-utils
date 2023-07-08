import { Link } from "react-router-dom"

import "../css/footer.css"

function Footer() {
    return (
        <footer className="pg-footer">
            <Link className="logo" to="/">Marcuth Utils</Link>
            <hr/>
            <div className="comlumns">
                <div className="author-info">
                    <img src="https://avatars.githubusercontent.com/u/91915075?v=4" alt="Site author"/>
                    <span className="name">Marcuth</span>
                </div>
                <ul className="links">
                    <span className="title">Links</span>
                    <li>
                        <Link target="_BLANK" to="https://github.com/1Marcuth/">Marcuth GitHub profile</Link>
                    </li>
                    <li>
                        <Link target="_BLANK" to="https://github.com/1Marcuth/marcuth-utils">Project repository</Link>
                    </li>
                    <li>
                        <Link target="_BLANK" to="https://storyset.com/technology">Technology illustrations by Storyset</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer