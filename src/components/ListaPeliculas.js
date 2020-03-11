import React from 'react';
import Pelicula from './Pelicula'

import {PeliculasConsumer} from '../context/PeliculasContext';

const ListaPeliculas = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <PeliculasConsumer>

                {(value)=>{
                    return(value.peliculas.map((pelicula,i)=>(
                        <Pelicula
                        key={i}
                        image={pelicula.poster_path}
                        pelicula={pelicula}
                        titulo={pelicula.original_title}
                        descripcion={pelicula.overview}
                        video_id={pelicula.id}
                        />
                    )))
                }}

            </PeliculasConsumer>

        </div>

     );
}
 
export default ListaPeliculas;