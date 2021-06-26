import { Route } from 'react-router-dom';
import FotoItem from '../components/FotoItem';
import  { useFotosState } from '../contexts/FotosContext';
import ProductoItem from './ProductoItem';

import styles from './Productos.module.scss';

const Productos = () => {
    //importamos el estado global desde el hook que importa de nuestro contexto
    const fotos = useFotosState();

    return (
        <>
            <h1>Página de Productos</h1>
            <main className={styles.fotoGrid}>
                {fotos.map((foto)=> ( 
                    <FotoItem key={foto.id} foto={foto} />
                ))}
            </main>

            {/* Aquí tenemos nuestro  Route que vigila solo los productos  únicos para mostrarlos debajo*/}
            <Route exact path='/productos/:productId/'>
                <ProductoItem />
            </Route>
        </>
    )
}

export default Productos;