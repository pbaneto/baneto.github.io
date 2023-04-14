import NavBar from './NavBar';


export default function Contacto() {
    return(
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-4 col-picture'>
                        <img className="fondo-contacto" src={require(`./photos/fondo_contacto.jpg`)} alt={'fondo contacto'}/>
                    </div>
                    <div className='col-md-8'>
                        <b>Sobre mí</b>
                    </div>
                </div>
            </div>
        </>

    );
}
