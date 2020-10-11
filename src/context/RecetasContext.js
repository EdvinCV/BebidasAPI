import React, {createContext, useState, useEffect} from 'react';
// Axios
import axios from 'axios';

// Context object
export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    //States
    const [recetas, setRecetas] = useState([]);
    const [busqueda, setBusquedaCont] = useState({
        nombre: '',
        categoria: ''
    });
    const {nombre, categoria} = busqueda;

    // Effect
    useEffect(() => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}&i=${nombre}`;
        const obtenerRecetas = async () => {
            const recetas = await axios.get(url);
            setRecetas(recetas.data.drinks);
        }
        obtenerRecetas();
    }, [busqueda]);

    return (
        <RecetasContext.Provider value={{setBusquedaCont, recetas}}>
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;