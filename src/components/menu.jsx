import { Link } from "react-router-dom"
import { useEffect } from "react"

function Menu() {
    function toggleMenuMobile(event) {
        if (event.type === "touchstart") event.preventDefault()

        const $nav = document.querySelector(".pg-nav")
        $nav.classList.toggle("active")
    }

    useEffect(() => {
        const $toggleMenuMobile = document.getElementById("toggle-menu-mobile")

        $toggleMenuMobile.addEventListener("click", toggleMenuMobile, { passive: false })
        $toggleMenuMobile.addEventListener("touchstart", toggleMenuMobile, { passive: false })

        return () => {
            $toggleMenuMobile.removeEventListener("click", toggleMenuMobile)
            $toggleMenuMobile.removeEventListener("touchstart", toggleMenuMobile)
        }
    }, [])

    return (
        <nav className="pg-nav">
            <button id="toggle-menu-mobile">
                <span id="burger"></span>
            </button>
            <ul className="pg-menu">
                <li>
                    <Link to="/">
                        <i className="bi bi-house"></i>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="./">
                        <i className="bi bi-info-circle-fill"></i>
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu