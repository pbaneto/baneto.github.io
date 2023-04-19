import NavBar from './NavBar';


export default function Contacto() {
    return(
        <div>
            <NavBar />
            <div className='container-fluid contacto-all'>
                <div className='row'>
                    <div className="contacto">
                        <img src={require('./photos/fondo_contacto.jpg')} className='contacto-img' alt={'img-contacto'}></img>
                    </div>
                    <div className='sobre'>
                        <b>Sobre Baneto</b>
                        <p>
                            Me llamo Paula y me gustan los pendientes. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
