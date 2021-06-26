import { useParams } from "react-router";
import FotoItem from "../components/FotoItem";
import { useFotosState } from "../contexts/FotosContext";


const ProductoItem = () => {
    //con el hook useParams podemos recibir el "id" que viene en la url
    const params = useParams();  
    const fotos = useFotosState(); 
    
    //Comprobamos la foto que se ha clicado
    const fotoSeleccionada = fotos.find(foto => { 
        return Number(foto.id) === Number(params.productId) 
    });
    
    return (
        <div id="detalle">
            <h1>¡Producto al detalle!</h1>            
            <FotoItem foto={fotoSeleccionada} />
            <h4>Precio: 3,99€</h4>
        </div>
    )
}

export default ProductoItem;