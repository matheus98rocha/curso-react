import React, { Component } from 'react';

import Button from '../Components/Button';

import Display from '../Components/Display'

import './Calculator.css';

export default class Calculator extends Component {

    clearMemory() {
        console.log('limpar');
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n);
    }

    render() {
        const addDigit = n => this.addDigit(n);
        const setOperation = op => this.setOperation(op);
        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" click={() => this.clearMemory()} triple ></Button>
                <Button label="/" click={setOperation} operation>/</Button>
                <Button label="7" click={addDigit}>7</Button>
                <Button label="8" click={addDigit}>8</Button>
                <Button label="9" click={addDigit}>9</Button>
                <Button label="*" click={setOperation} operation>*</Button>
                <Button label="4" click={addDigit}>4</Button>
                <Button label="5" click={addDigit}>5</Button>
                <Button label="6" click={addDigit}>6</Button>
                <Button label="-" click={setOperation} operation>-</Button>
                <Button label="1" click={addDigit}>1</Button>
                <Button label="2" click={addDigit}>2</Button>
                <Button label="3" click={addDigit}>3</Button>
                <Button label="+" click={setOperation} operation>+</Button>
                <Button label="0" click={addDigit} double>0</Button>
                <Button label="." click={setOperation} operation>.</Button>
                <Button label="=" click={setOperation} operation>=</Button>


            </div>
        )
    }
}

