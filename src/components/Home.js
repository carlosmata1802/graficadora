import React, { useState, useEffect } from 'react';
import Grafica from './Grafica';
import Form from './Form';

const functionPlot = require('function-plot');

const Home = () => {
    const [error, setError] = useState({
        state: false,
        mensaje: ''
    });
    const [functionToGraph, setFunctionToGraph] = useState('');
    
    useEffect(()=> {
        if (functionToGraph === "") return;
    }, [functionToGraph, error])

    const getData = data => {
        if (data.functionToGraph === '' || data.limitA === '' || data.limitB === '') {
            setError({
            state: true,
            mensaje: 'Todos los campos son obligatorios'
            })
            return 0; 
        }

        setFunctionToGraph(data.functionToGraph)
        draw(data)
        setError({
            state: false,
            mensaje: ''
        })

    }
    
    const draw = (data) => {
        setTimeout(() => {
            try {
                let functionGraph = functionPlot({
                target: '#plot-graphic',
                data: [{
                    fn: data.functionToGraph,
                    sampler: 'builtIn',
                    graphType: 'polyline', 
                    range: [data.limitA, data.limitB],
                    closed: true
                },
                {
                    fn: data.functionToGraph,
                    sampler: 'builtIn', 
                    graphType: 'polyline',
                }],
                plugins: [
                    functionPlot.plugins.definiteIntegral({
                      tol: 1e-8,
                      maxdepth: 20
                    })
                ]
                });
                functionGraph.on('definite-integral', function (datum, i, value, a, b) {
                    console.log(value, a, b)
                })
            }
            catch (err) {
                alert("Error")
            }
        }, 200)
        
    }

    let grafica = (error.state) ? <p>Todos los campos son obligatorios</p> : <Grafica functionToGraph = {functionToGraph} />
    
    return ( 
        <div className="page-width card-main">
            <h1 className="center-align title">Gráficador de funciones √2x</h1>
            <div className="row">
                <div className="col m3 contentwithBorder">
                    <div className="content">
                        <Form getData={getData} />
                    </div>
                </div>
                <div className="col m6">
                    <div className="content graphic">
                        {grafica}
                    </div>
                </div>
                <div className="col m3 contentwithBorder">
                    <div className="content">
                        <p className="subtitle">Resultados</p>
                        <p className="resultLabel">Área bajo la curva</p>
                        <p className="resultLabel">Integral</p>
                        <p className="resultLabel">Derivada</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;