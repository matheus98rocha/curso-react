import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './views/App'

import DataContext, { data } from './data/DataContext';

ReactDOM.render(
    <DataContext.Provider value={data}>
        <App />
    </DataContext.Provider>,
    document.getElementById('root')
)