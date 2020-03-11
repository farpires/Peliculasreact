import React, {Component} from 'react';

import {GenerosConsumer} from '../context/GenerosContext';
import {PeliculasConsumer} from '../context/PeliculasContext';

class Formulario extends Component {
    state = { 
     nombre:'',
     genero: ''
     }

     //si el usuario agrega una pelicula o genero

     obtenerDatosPelicula = e =>{
         this.setState({
             [e.target.name] : e.target.value
         })
     }

    render() { 
        return ( 
            <PeliculasConsumer>
               {(value)=>{
                //  console.log("PELICULAS consumer")
                //    console.log(value.peliculas);
                //    console.log(value.obtenerPeliculas);
               return (
                 <form
                 onSubmit={(e) =>{
                        e.preventDefault();
                        value.obtenerPeliculas(this.state)
                 }}
                 >
                   <fieldset className="uk-fieldset uk-margin">
                     <legend className="uk-legend uk-text-center">
                       Busca tu pelicula por nombre o genero
                     </legend>
                   </fieldset>

                   <div className="uk-column-1-3@m uk-margin">
                     <div className="uk-margin" uk-margin="true">
                       <input
                         name="nombre"
                         className="uk-input"
                         type="text"
                         placeholder="Nombre de Pelicula"
                         onChange={this.obtenerDatosPelicula}
                       />
                     </div>

                     <div className="uk-margin" uk-margin="true">
                       <select
                         className="uk-select"
                         name="genero"
                         onChange={this.obtenerDatosPelicula}
                       >
                         <option value="">--Selecciona Categoria--</option>
                         <GenerosConsumer>
                           {(value) => {
                            //  console.log("GENERO consumer")
                            //  console.log(value);
                             return value.generos.map(genero => (
                               <option
                                 key={genero.id}
                                 value={genero.id}
                                 data-uk-form-select
                               >
                                 {genero.name}
                               </option>
                             ));
                           }}
                         </GenerosConsumer>
                       </select>
                     </div>

                     <div>
                       <input
                         type="submit"
                         className="uk-button uk-button-danger"
                         value="Buscar Peliculas"
                       />
                     </div>
                   </div>
                 </form>
               );}} 
            </PeliculasConsumer>
         );
    }
}
 
export default Formulario;