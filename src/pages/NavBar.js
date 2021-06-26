import { Link, NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <header className={styles.mainHeader} >
            <div className={styles.container}>
                {/* Link se usa para poder ir de una url a otra si hacer peticiones al servidor */}
                <h1><Link to="/">MiTienda</Link></h1>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            {/* NavLink se usa igual que Link pero nos da la posibilidad de añadir una clase al alemento que esté activo para diferenciarlo del resto. */}
                            <NavLink activeClassName={styles.activo} to="/productos">Productos</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={styles.activo} to="/nosotros">Sobre Nosotros</NavLink>
                        </li>
                        <li>
                            <NavLink to="/carrito" activeClassName={styles.activo}><i className="fas fa-shopping-cart"></i></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;