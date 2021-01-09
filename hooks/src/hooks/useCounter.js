import { useState, useEffect } from 'react';
import PageTitle from '../components/layout/PageTitle';


export const useCounter = (initialValue = 100) => {
    const [count, setCount] = useState(initialValue)

    function inc() {
        setCount(count + 1)
    }


    function dec() {
        setCount(count - 1)
    }

    useEffect(() => {
        if (count > 10) {
            document.title = "Maior que 10"
        }else{
            document.title = "Menor que 10"
        }
    }, [count])


    return [count, inc, dec]
}