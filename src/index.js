import * as ReactDOM from 'react-dom';

//podemos usar BrowserRouter directamente pero en muchos sitios se crea el alias de Router para simplificar
import { /*BrowserRouter as Router,*/ HashRouter } from 'react-router-dom';

import App from './App';

//Nuestro Router siempre tiene que envolver aquello que queramos que pueda usar Route, Switch, etc.
//En este caso, solo porque necesito hacer el deploy de la app dentro de Github Pages uso "HashRouter" en lugar de "BrowserRouter" pero lo normal es siempre usar "BrowserRouter".
ReactDOM.render(<HashRouter basename='/'><App /></HashRouter>, document.getElementById('root'));
