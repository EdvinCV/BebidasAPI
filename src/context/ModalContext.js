import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();


const ModalProvider = (props) => {
    // State
    const [ idReceta, setIdReceta] = useState(null);
    const [ details, setDetails ] = useState({});

    useEffect(() => {
        const getReceta = async () => {
            if(!idReceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
            const receta = await axios.get(url);
            setDetails(receta.data.drinks[0]);
        }
        getReceta();
    }, [idReceta])

    return (
        <ModalContext.Provider value={{setIdReceta, details, setDetails}}>
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;