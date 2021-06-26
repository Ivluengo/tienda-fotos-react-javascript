//Nuestro reducer tiene que ser una FUNCIÓN PURA:
    //Nunca afecta a nada del exterior

import types from "../types/types";

    //Pasándole siempre los mismos datos devolverá exactamente el mismo resultado. (Ej: No podemos usar metodos como random() en su interior)
const fotosReducer = (state, action) => {
    //Hay que vigilar muchísimo que siempre se devuelva un estado completamente nuevo, no modificar el existente.
    switch(action.type){
        case types.toggleFavoritas: {
            const newArray = state.map(foto => {
                if(foto.id === action.payload) {
                    return {...foto, esFavorita: !foto.esFavorita}
                } else{
                    return foto;
                }
            })
            return newArray;
        }
        case types.toggleCarrito: {
            const newArray = state.map(foto => {
                if(foto.id === action.payload) {
                    return {...foto, enCarrito: !foto.enCarrito}
                } else{
                    return foto;
                }
            })
            return newArray;
        }
        case types.fetchFotos:
            return action.payload;                           
        
        default:
            return state;
    }

}

export default fotosReducer;