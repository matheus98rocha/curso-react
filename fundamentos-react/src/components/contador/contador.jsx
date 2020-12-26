import React, { Component } from 'react';

import Display from './display';
import Botoes from './botoes'
import From from './passoForm'

import './contador.css'

class Contador extends Component {


    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 2,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (newPass) => {
        this.setState({
            passo: newPass
        })
    }

    render() {
        return (
            < div className="contador " >

                <Display numero={this.state.numero} />

                < From passo={this.state.passo} setPasso={this.setPasso} />

                <Botoes inc={this.inc} dec={this.dec} />
            </div >
        )
    }
}


export default Contador