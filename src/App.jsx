import React from 'react'

import Header from "./components/header";
import {Home, Basket} from './pages'
import {Route} from "react-router-dom";
import GotServices from "./services/services";
const App = () => {
  const gotServices = new GotServices();
  gotServices.getPizzas()

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/basket' component={Basket}/>
            </div>
        </div>
    )
}

export default App;
