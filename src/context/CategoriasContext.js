import React, {useState, useEffect} from 'react';
// AXIOS
import axios from 'axios';


// Context object
export const CategoriasContext = React.createContext();

// Provider
const CategoriasProvider = (props) => {
    // State
    const [categories, setCategories] = useState([]);

    // Effect
    useEffect(() => {
        const getCategories = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            const categories = await axios.get(url);
            setCategories(categories.data.drinks);
        }
        getCategories();
    }, [])

    return (
        <CategoriasContext.Provider value={{categories}}>
            {props.children}
        </CategoriasContext.Provider>
    );
}

export default CategoriasProvider;