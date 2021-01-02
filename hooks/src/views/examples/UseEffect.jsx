import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {

    function calcFatorial(num) {
        const n = parseInt(num)
        if (n < 0) return -1;
        if (n === 0) return 1;
        return calcFatorial(n - 1) * n
    }

    function calcParOuImpar(value) {
        const val = value;
        if (val % 2 === 0) {
            return "Par"
        } else {
            return "Impar"
        };

    }

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState("Impar");

    useEffect(() => {
        setFatorial(calcFatorial(number));
    }, [number]);

    useEffect(() => {
        if (fatorial > 1000) {
            document.title = "Dalee"
        } else {
            document.title = "React App"
        }
    }, [fatorial])

    useEffect(() => {
        if (number % 2 === 0) {
            setStatus("Par")
        } else {
            setStatus("Impar")
        }
    }, [number])




    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />

            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text">
                        {fatorial === -1 ? "Não existe" : fatorial}
                    </span>
                </div>

                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status:</span>
                    <span className="text">{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
