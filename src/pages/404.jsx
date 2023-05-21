import "../css/404.css"

function Error404() {
    setTimeout(() => {
        window.location.href = "/"
    }, 3000)

    return (
        <div>
            <div className="container">
                <p className="indroduction-text">Opss...</p>
                <div className="error-code">404</div>
                <p className="error-description">Essa página não foi encontrada!</p>
            </div>
        </div>
    )
}

export default Error404