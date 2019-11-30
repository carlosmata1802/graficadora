import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Modal from './Modal';
 
const Login = () => {
    const [ modal, setModal ] = useState(false);
    const [login, setLogin] = useState(false);
    
    const controlModal = () => setModal(!modal);
    const getUsuario = usuario => {
        if (usuario.password === "" || usuario.email === "")
            return false
        //Aqui consumir el service de login 
        //por lo mientras 
        setLogin(true)    
    }
    
    if (login) return <Redirect to="/Home" />
    return ( 
        <div>
            <div id="backgroundImage">
                <div className="login">
                    <div className="contentLogin">
                        <h2>Grafíca y obten cálculos al instante</h2>
                        <h3>El estudio profundo de la naturaleza es la fuente más fértil de descubrimientos matemáticos. </h3>
                        <div className="buttonsContent">
                            <div classNAme="waves-effect btn" onClick={controlModal}>Iniciar sesión</div>
                            <div classNAme="waves-effect btn">Registrarse</div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal modal={modal} controlModal={controlModal} />
        </div>
    );
}
 
export default Login;