import React, { Component } from 'react';
import  { CategoriasConsumer } from '../context/CategoriasContext';

class Formulario extends Component {
    state = { 
        nombre : '',
        categoria : '' 
     } 

     // Si el usuario agrega un evento o categoría
     obtenerDatosEvento = e => {
         this.setState({
             [e.target.name] : e.target.value
         })
     }
    render() { 
        return (
            <form>
                <fieldset className='uk-fieldset uk-margin'>
                    <legend className='uk-legend uk-text-center'>
                        Busca tu evento por nombre o categoría
                    </legend>
                </fieldset> 

                <div className='uk-column-1-3@m uk-margin'>
                    <div className='uk-margin' uk-margin='true'>
                        <input
                            name = 'nombre'
                            className='uk-input'
                            type = 'text'
                            placeholder = 'Nombre de evento o ciudad'
                            onChange={this.obtenerDatosEvento}
                        />
                    </div>
                    <div className='uk-margin' uk-margin = 'true'>
                        <select
                            className='uk-select'
                            name = 'categoria'
                            onChange={this.obtenerDatosEvento}
                        >
                            <option value=''> --Seleccione una categoría--</option>
                            <CategoriasConsumer>
                                {(value) => {
                                   return(
                                       value.categorias.map(categoria => (
                                           <option key={categoria.id} value={categoria.id} data-uk-form-select> 
                                            {categoria.name_localized}
                                            </option>
                                       ) )
                                   )
                                }}
                            </CategoriasConsumer>
                        </select>
                    </div>
                    
                    <div>
                         <input type='submit' className='uk-button uk-button-danger' value = 'Buscar eventos'/>
                    </div>
                </div>

            </form>
        );
    }
}
 
export default Formulario;