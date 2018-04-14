import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Figurita from './Figurita'

const figusGuardadas = [
  'argentina',
  'islandia',
  'nigeria',
  'croacia'
]

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
    const figus = figusGuardadas
    this.setState({
      figus: figus
    })
  }

  render () {
    return (
      <div className='album-container'>
        <h1>Las figus de la igualdad</h1>
        { // Si figus !== false rendereo una grilla donde se mostrara una figu 
          // x cada item del array this.state.figus
          this.state.figus &&
          <div className='grilla'>
            {this.state.figus.map((id) => 
                <Figurita 
                pais='argentina'
                foto='https://t1.ea.ltmcdn.com/es/images/7/9/5/img_por_que_las_gatas_se_comen_a_sus_gatitos_recien_nacidos_22597_600.jpg'
                nombre='Juana Perez'
                key={id} />
            )}
          </div>
          // Muestro un boton para acceder al component Partido
        }
        <div className='button-container'>
          <Link to='/partido'>
            <button>
              <span>
                Ganá más figus!
              </span>
            </button>
          </Link>
        </div>
      </div>
    )
  }
}