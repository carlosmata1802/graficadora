import React, { useState } from 'react';

const Form = ({getData}) => {

    const [busqueda, guardarBusqueda] = useState({
        functionToGraph: '',
        limitA: '',
        limitB: ''
    });

    const handleChange = e => {
        //cambiar valores
        guardarBusqueda({
            ...busqueda, 
            [e.target.name] : e.target.value
        })
    }

    const consultarGrafica = e => {
        e.preventDefault()
        getData(busqueda);
    }

    const addSimbolo = e => {
        console.log(e.target.value)
        guardarBusqueda({
            ...busqueda, 
            functionToGraph: busqueda.functionToGraph + e.target.value
        })
    }
    const simbolos = ['sqrt','log','pi','e','sin','cos','tan','cot','sec','csc']
    return (
        <div>
            <form
            onSubmit={consultarGrafica}
            >
                <div className="symbols">
                {simbolos.map(simbolo => (
                    <div key={"id"+simbolo}>
                        <input 
                            type="checkbox"
                            name={simbolo}
                            value={`${(simbolo === 'e' || simbolo === 'pi' ) ? simbolo : simbolo + "(x)"}`}
                            onClick={addSimbolo}
                        />
                    {simbolo}</div>
                ))}
                </div>
                <div className="input-field">
                    <input 
                        type="text"
                        id="functionToGraph"
                        name="functionToGraph"
                        value={ busqueda.functionToGraph }
                        onChange={handleChange}
                    />
                    <label htmlFor="functionToGraph">Ingresa una función </label>
                </div>
                <div className="input-field">
                    <input 
                        type="text"
                        id="limitA"
                        name="limitA"
                        value={ busqueda.limitA }
                        onChange={handleChange}
                    />
                    <label htmlFor="limitA">Ingresa límite inferior</label>
                </div>
                <div className="input-field">
                    <input 
                        type="text"
                        id="limitB"
                        name="limitB"
                        value={ busqueda.limitB }
                        onChange={handleChange}
                    />
                    <label htmlFor="limitB">Ingresa límite superior</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Grafica
                    <i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    );
}
 
export default Form;
