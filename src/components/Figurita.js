import React, { Component } from 'react'

class Figurita extends Component {
  render() {
    return (
      <div id='figurita' className='Figurita'>
        <div id='pais'>{this.props.pais}</div>
        <div id='foto'><img src={this.props.foto} alt={this.props.nombre}/></div>
        <div id='nombre'>{this.props.nombre}</div>
      </div>
    )
  }
}

export default Figurita
