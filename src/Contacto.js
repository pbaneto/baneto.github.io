import NavBar from './NavBar';


export default function Contacto() {
    return(
        <div>
            <NavBar />
            <div className='container-fluid'>
            <p className='sobre'>
                Si tienes cualquier duda contáctanos por mensaje directo en <a href="https://www.instagram.com/baneto.es/" className='instagram-name' target={'_black'}><b>instagram</b></a>, te responderemos con la mayor brevedad posible.
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

                    <p>
                        Modelo uno rotate.

                        Modelo dos lucete.
                    </p>
                    <p>
                        Me llamo Paula, tengo 26 años y me puse a hacer pendientes el famoso 2019 mientras estaba viviendo en Trento,
                        donde el concilio. Surgió porque me encantan los pendientes y,
                        en ese momento de mi vida, no era muy solvente que digamos, así que había que buscar una alternativa a comprarlos.
                    </p>
                    <p>
                        Después de muchos intentos salieron cosillas que resultó que a la gente les gustaron.
                        Así que si tu eres de ellos... ya sabes, like y subscríbete .
                    </p>

                </div>
            </div>
        </div>
    );
}
