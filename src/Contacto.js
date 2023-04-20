import NavBar from './NavBar';


export default function Contacto() {
    return(
        <div>
            <NavBar />
            <div className='container-fluid contacto-all'>
                <div className="contacto">
                    <img src={require('./photos/foto.png')} className='contacto-img' alt={'img-contacto'}></img>
                </div>
                <div className='sobre'>
                    {/* <img src={require('./photos/foto.png')} className="yo"></img> */}
                    {/* <b>Sobre Baneto</b> */}

                    <p>
                        Modelo uno rotate.

                        Modelo dos lucete.
                    </p>
                    <p>
                        Me puse a hacer pendientes el famoso 2019 mientras estaba viviendo en Trento,
                        donde el concilio. Basicamente porque me gustan mucho los pendientes
                         y en ese momento no era muy solvente que digamos y había que buscar una alternativa.
                    </p>
                    <p>
                        Salieron cosas un poco feas, pero otras no estaban nada mal. Resultó que a
                        la gente ĺes gustaron y aquí estamos.
                    </p>
                </div>
            </div>
        </div>
    );
}
