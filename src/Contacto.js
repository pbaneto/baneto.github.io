import NavBar from './NavBar';


export default function Contacto() {
    return(
        <div>
            <NavBar />
            <div className='container-fluid'>
            <p>
                Si tienes cualquier duda contactanos por mensaje directo en <a href="https://www.instagram.com/baneto.es/" className='instagram-name' target={'_black'}>instagram</a>, te responderemos con la mayor brevedad posible.
                Muchas gracias.
            </p>

            {/* <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Nombre:</label>
                    <input type="email" className="form-control" id="" placeholder="Margarita Flores" />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Correo electrónico:</label>
                    <input type="email" className="form-control" id="" placeholder="marga_flowers97@gmail.com" required/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Mensaje:</label>
                    <input type="email" className="form-control" id="" placeholder="Escribe aquí tus dudas"/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form> */}

            </div>
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
                        Me llamo Paula, tengo 26 años y me puse a hacer pendientes el famoso 2019 mientras estaba viviendo en Trento,
                        donde el concilio. Surgió, basicamente, porque me encantan los pendientes y,
                        en ese momento de mi vida, no era muy solvente que digamos asi que había que buscar una alternativa a comprarlos.
                    </p>
                    <p>
                        Salieron cosas un poco feas, pero otras no estaban mal del todo y resultó que a
                        la gente les gustaron. Así que si tu eres de esos ya sabes, like y subscríbete.
                    </p>

                </div>
            </div>
        </div>
    );
}
