import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer' style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className='redes'>
            <a href='https://www.facebook.com'><img src='/img/facebook.png' alt='facebook'></img></a>
            <a href='https://www.twitter.com'><img src='/img/twitter.png' alt='twitter'></img></a>
            <a href='https://www.instagram.com'><img src='/img/instagram.png' alt='instagram'></img></a>
        </div>
        <img src='/img/Logo.png' alt='org'></img>
        <strong>Desarrollado por Simón Sosa</strong>
    </footer>
  )
}

export default Footer
