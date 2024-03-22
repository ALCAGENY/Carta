import React from 'react';
import "./Style1.css";

const Inicio = () => {
    const handleEnvelopeClick = () => {
        const envelope = document.querySelector('.envelope-wrapper');
        envelope.classList.toggle('flap');
    };

    const handleGoToFloresPage = () => {
        window.location.href = 'https://inspiring-sunburst-cb1650.netlify.app'; // Aquí debes colocar la URL de la página a la que deseas navegar
    };

    return (
        <>
            <div className="night">
                <div className="container">
                    <div className="envelope-wrapper" onClick={handleEnvelopeClick}>
                        <div className="envelope">
                            <div className="letter">
                                <div className="text">
                                    <strong>Para Areli</strong><br /><br />
                                    <p>
                                    Ya te dieron Flores Hoy? <br />
                                    Espero no te maande una como estas, A mi estilo 
                                    Espero que te gusten.
                                    
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <p className='PPP'>Click Al Corazón De Enmedio</p>
                        <p className='PPP'>Click Despues De Leer <button className='Botoooon' onClick={handleGoToFloresPage}>Aquí</button></p>
                        <div className="heart"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inicio;
