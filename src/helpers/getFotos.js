//Importamos nuestras fotos en este caso de un repositorio de mi cuenta en la que tengo una serie de fotos

const getFotos = async () => {
    const resp = await fetch('https://raw.githubusercontent.com/Ivluengo/tienda-fotos-react-typescript/main/src/fotos-animales/listaFotos.json');
    const fotos = await resp.json();

    return fotos;
}

export default getFotos;