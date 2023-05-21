import { Link } from "react-router-dom"

import Menu from "./menu"

import "../css/header.css"

function Header() {
    return (
        <header className="pg-header">
            <Link to="/" className="logo">Marcuth Utils</Link>
            <Menu/>
        </header>
    )
}

export default Header