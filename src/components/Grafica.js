import React from 'react';

const Grafica = ({functionToGraph}) => {
    let title = (functionToGraph === '') ? "No has ingresado ninguna función" : `Resultado para ${functionToGraph}`;
    return ( 
        <div className="">
            <p className="subtitle">{title}</p>
            <div id="plot-graphic"></div>
        </div>
    );
}
 
export default Grafica;
