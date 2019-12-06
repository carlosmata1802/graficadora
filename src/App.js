import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import axios from "axios";
import ListaGraficas from './components/ListaGraficas';

const fetchLogin = async () => {
    let user = "rperedo";
    let password = "rpv";
      const url = `http://172.20.112.1:8080/struts2react/Login?username=${user}&password=${password}`;
      console.log(url)
      //consultar la url
      const respuesta = await fetch(url,{
        'headers': {
            'mode': 'cors',
            'Access-Control-Allow-Origin': '*',
        }});
      const resultado = await respuesta;
      console.log(resultado)
} 

async function getUser() {
  let user = "rperedo";
  let password = "rpv";
  try {
    const response = await axios.get(`http://172.20.112.1:4848/struts2react/Login?username=${user}&password=${password}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getUser();


function App() {
  const header = ( window.location.pathname.indexOf("home") > -1 ) ? <Header/> : "";
  return (
    <div className="App">
      { header }
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/listaGraficas" component={ListaGraficas} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
