import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Figurita from './Figurita'

const paises = [
  {
    pais: 'argentina',
    foto: 'https://t1.ea.ltmcdn.com/es/images/7/9/5/img_por_que_las_gatas_se_comen_a_sus_gatitos_recien_nacidos_22597_600.jpg',
    nombre: 'Juana Perez'
  },
  {
    pais: 'islandia',
    foto: 'https://t1.ea.ltmcdn.com/es/images/7/9/5/img_por_que_las_gatas_se_comen_a_sus_gatitos_recien_nacidos_22597_600.jpg',
    nombre: 'Pepa Gomez'
  }
]

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      pais1: false,
      pais2: false
    }
  }

  componentDidMount () {
    const jugadores = paises
    this.setState({
      pais1: jugadores[0],
      pais2: jugadores[1]
    })
  }

  render () {
    return (
      <div className='container-partido'>
        <h1>Partido</h1>
        <div className='container-equipos'>
          {this.state.pais1 &&
            <Figurita 
              pais={this.state.pais1.pais}
              foto={this.state.pais1.foto}
              nombre={this.state.pais1.nombre}
              />
          }
          <span> VS </span>
          {this.state.pais2 &&
            <Figurita 
              pais={this.state.pais2.pais}
              foto={this.state.pais2.foto}
              nombre={this.state.pais2.nombre}
              />
          }
        </div>
        <div className='container-preguntas'>
          <p>¿Quién aprobo primero la ley de matrimonio igualitario?</p>
          <div className='container-botones'>
            <Link to='/resultado?ganador'>
              <button>
                <span>País 1</span>
              </button>
            </Link>
            <Link to='/resultado?perdedor'>
              <button>
                <span>País 2</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}