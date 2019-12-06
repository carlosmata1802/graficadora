import React, { useEffect, useSate } from 'react';

//const data = JSON.parse(localStorage.getItem("graficas"));
const data = [
        {
            function: '',
            limiteInferior: '', 
            limiteSuperior: '',
            derivada: '',
            area: ''
        },
        {
            function: '',
            limiteInferior: '', 
            limiteSuperior: '',
            derivada: '',
            area: ''
        },
        {
            function: '',
            limiteInferior: '', 
            limiteSuperior: '',
            derivada: '',
            area: ''
        }
    ]

const graficas = [...data]; 

const getUserInfo = async () => {
    const response = await fetch(""); 
    const data2 = response.json(); 
}

const ListaGraficas = () => { 
    const mensaje = graficas.length < 1 ? 'No hay gráficas' : 'Puedes ver tus gráficas aquí...';
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="row lista-grafi">
                    {graficas.map(grafica => (
                        <div className="col m4">
                            <div className="content">
                                <div id="image_small">
                                    
                                </div>
                                <div className="labelsFunctionInfo">
                                    <p>tiítulo</p>
                                </div>
                                <div className="functionInfo">
                                    <p>{grafica.function}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ListaGraficas;