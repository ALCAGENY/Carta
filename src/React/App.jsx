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
                                    <strong>Para Johana Yuridia</strong><br /><br />
                                    <p>
                                    Hola mi Yuri linda 😍<br />
                                    te dije que te mostraria un proyecto que tenia,
                                    te hice unas flores para ti, tqm 😘😘  unos besos o que??
                                    
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </div>
                       <div className='centro'>
                       <p className='PPP'> <button className='Botoooon' onClick={handleGoToFloresPage}>FLORES</button></p>
                       </div>
                       
                        <div className="heart"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Inicio;
