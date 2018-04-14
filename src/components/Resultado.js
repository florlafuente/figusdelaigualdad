import React, { Component } from 'react'

class Resultado extends Component {
    render() {
        if (this.props.location.search == '?ganador') {
            return (
                <div id='resultado' className='Resultado'>
                    <span className="ganador">Ganaste</span>
                    <div className="explicacion">
                    En Argentina el matrimonio igualitario se aprobó en el año 2010 y en Islandia en el 2010
                    </div>
                </div>
            )
        } else {
            return (
                <div id='resultado' className='Resultado'>
                    <span className="ganador">Perdiste</span>
                    <div className="explicacion">
                    En Argentina el matrimonio igualitario se aprobó en el año 2010 y en Islandia en el 2010
                    </div>
                </div>
            )
        }
    }
}

export default Resultado
