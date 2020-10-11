import React, {useContext, useState} from 'react';
// Context
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {
    // Context
    const {categories} = useContext(CategoriasContext);
    const {setBusquedaCont} = useContext(RecetasContext);
    // State
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const getFormData = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }
    
    return (
        <form
            className="col-12"
            onSubmit={(e) => {
                e.preventDefault();
                setBusquedaCont(busqueda);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control" 
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={getFormData}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        name="categoria"
                        className="form-control"
                        onChange={getFormData}
                    >
                        <option value="">-- Seleccione categoria --</option>
                        {
                            categories.map((cat, index) => {
                            return <option key={index} value={cat.strCategory}>{cat.strCategory}</option>  
                            })
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        value="Buscar Bebidas"
                        className="btn btn-block btn-primary"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;