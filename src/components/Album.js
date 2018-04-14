import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props)
    // Inicializo el state figus en false 
    this.state= {
      figus: false
    }
  }

  componentDidMount() {
    // Traigo las figus que tengo guardadas en sessionStorage y las guardo en mi state
    const figus = window.sessionStorage.getItem('figus')
    this.setState({
      figus: figus
    })
  }

  render () {
    return (
      <div>
        <h1>Las figus de la igualdad</h1>
        { // Si figus !== false rendereo una grilla donde se mostrara una figu 
          // x cada item del array this.state.figus
          this.state.figus &&
          <div className='grilla'>
            {this.state.figus.map((id) => {
              return (
                <div key={id}>
                  <p>Soy una figu</p>
                </div>
              )
            })}
          </div>
          // Muestro un boton para acceder al component Partido
        }
        <div className='button-container'>
          <button>
            <span>
              Ganá más figus!
            </span>
          </button>
        </div>
      </div>
    )
  }
}