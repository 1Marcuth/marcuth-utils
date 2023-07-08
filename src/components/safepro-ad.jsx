const SurfeProAd = () => {
    const adsHtml = `data:text/html,<style>body{padding: 0; margin: 0; box-sizing: border-box;}</style><script src="//static.surfe.pro/js/net.js"></script><ins class="surfe-be" data-sid="377729"></ins><script>(adsurfebe=window.adsurfebe || []).push({});</script>`

    return (
        <div style={{ margin: "1rem 0" }}>
            <iframe style={{
                width: "100%",
                height: "250px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }} src={adsHtml} frameBorder={0}></iframe>
        </div>
    )
}

export default SurfeProAd