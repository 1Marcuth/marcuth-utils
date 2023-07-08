function CopyableText(props) {
    const text = props.children
    const style = { cursor: "pointer" }

    return (
        <span style={style} title="Clique para copiar o texto!" onClick={(event) => {
            navigator.clipboard.writeText(text)
            event.target.innerText = "Copiado para a área de transferência!"
            
            setTimeout(() => {
                event.target.innerText = text
            }, 1500)
        }}>{text}</span>
    )
}

export default CopyableText