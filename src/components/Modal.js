import React, { useState } from 'react';

const Modal = ({ modal, controlModal }) => {
    if( modal === false ) 
        return (<div></div>)
    return ( 
        <div className="modal-container">
            <div id="closeModal" onClick={controlModal}></div>
            <div className="modal-content">
                <div className="modal-login">
                    <div className="row">
                        <div className="col m6 image"></div>
                        <div className="col m6">
                            <h4 className="title-secondary">Comienza a graficar</h4>
                            <div className="login-form">
                                <form className="login-form">
                                    <div className="row">
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">mail_outline</i>
                                            <input className="validate" id="email" type="email"/>
                                            <label for="email" data-error="wrong" data-success="right">Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">lock_outline</i>
                                        <input id="password" type="password"/>
                                        <label for="password">Contraseña</label>
                                    </div>
                                    </div>
                                    
                                    <div className="row">
                                    <div className="input-field col s12">
                                        <a href="#" className="btn waves-effect waves-light col s12">Iniciar sesión</a>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="input-field col s6 m6 l6">
                                        <p className="margin medium-small"><a href="#">Registrarse</a></p>
                                    </div>
                                    <div className="input-field col s6 m6 l6">
                                        <p className="margin right-align medium-small"><a href="#">Olvidaste tu contraseña</a></p>
                                    </div>          
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Modal;