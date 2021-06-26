import { Route, Switch, Redirect } from 'react-router-dom';

import Home from "./pages/Home";
import NavBar from './pages/NavBar';
import Productos from './pages/Productos';
import SobreNosotros from './pages/SobreNosotros';
import Pagina404 from './pages/Pagina404';
import Carrito from './pages/Carrito';
// import ProductoItem from './pages/ProductoItem';

import {FotosProvider} from './contexts/FotosContext';

import styles from './index.module.scss';


const  App = () => {
    return (
        <>
            {/* Envolvemos todos los componentes que queramos que dispongan de nuestro "estado global" con nuestro provider que hemos creado */}
            <FotosProvider>
                {/* Al estar fuera de nuestro Switch, "NavBar" se mostrará en todas las páginas */}
                <NavBar />
                <section className={styles.pageSection}>
                    {/* Switch hace que solo nos muestre la primera ruta que coincida, no varias */}
                    <Switch>
                        {/* Utilizamos "exact" para decir que solo si escribimos exactamente esta ruta nos lleve a ella */}
                        <Route exact path='/'>
                            <Home />
                        </Route>

                        {/* Prueba de una redirección */}
                        <Route path='/home'>
                            <Redirect to='/' />
                        </Route>
                        <Route path='/productos'>
                            <Productos />
                        </Route>
                        {/* He comentado la siguiente ruta porque la hemos pasado directamente dentro de nuestra página productos para que se encargue ella */}
                        {/* <Route path='/productos/:productId'>
                                <ProductoItem />
                        </Route> */}
                        <Route path='/nosotros'>
                            <SobreNosotros />
                        </Route>
                        {/* También podemos crear rutas que se autocierran con la prop "component" para simplificar */}
                        <Route path='/carrito' component={Carrito} />
                        {/* El asterisco "*" nos lleva acualquier ruta, y al ponerlo al final le estamos diciendo que siempre que no coincida con todo lo de arriba nos lleve a nuestro 404 */}
                        <Route path='*'>
                            <Pagina404 />
                        </Route>
                    </Switch>
                </section>
            </FotosProvider>
        </>
    );
}

export default App;
