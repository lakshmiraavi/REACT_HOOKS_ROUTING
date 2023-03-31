// Bootstrap Files & fontawesome files

import '@fortawesome/fontawesome-free/css/all.css'

import 'mdbootstrap/css/bootstrap.css'
import 'mdbootstrap/css/mdb.css'
import './styles.css'   // customized bootstrap styles


import React from 'react'
import App from './App'
import './index.css'   // customized react component styles
import  ReactDOM  from 'react-dom'

ReactDOM.render(
    <React.StrictMode>
     <App />
    </React.StrictMode>,document.getElementById('root')
)