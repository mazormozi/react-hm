import React, { Component } from 'react';
import './App.css';
import { create } from 'domain';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetCards from './myMovie/cards';


function App() {
   return (<React.Fragment>
    <GetCards /> 
   </React.Fragment>)
}

export default App;


