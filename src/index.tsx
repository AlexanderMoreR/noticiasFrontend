import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/litera/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ListaNoticias } from './Components/Contents/ListaNoticias';
import { Navbar } from './Components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar/>
      <div className="container p-4">
        <Switch>
        <Route path="/" component={ListaNoticias} ></Route>
        </Switch>
      </div>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
