import React from 'react';
const Pelicula = (props) => {

    //extraer el texto
   let  token ='23688c5ae859fb4e6f87050974120dde';
// let url=`https://api.themoviedb.org/3/movie/${props.video_id}/rating?api_key=${token}`
let urll=`https://api.themoviedb.org/3/movie/${props.video_id}/reviews?api_key=${token}`
    return ( 
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
            {
            //  props.image == null? 
            // <img src={`https://s3-ap-southeast-1.amazonnaws.com/upcode/static/default-image.jpg"`} 
            // alt="card image" 
            // style={{width: "100%",height:360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} 
            // alt="card image" 
            // style={{width: "100%",height:360}}/>
            }
            {props.image 
            ? <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt={props.name} style={{ width: "100%",height:360}}/>
            : null
            }

            </div>

            <div className="uk-card-body">
                {
                    props.titulo ?
                    <h3 className="uk-card-title">{props.pelicula.original_title}</h3>
                    : null
                }
                <p>{props.descripcion}</p>
               
            </div>

            <div className="uk-card-footer">
                <a href={urll} className="uk-button uk-button-secondary">
                    Mas Informacion
                </a>
            </div>
        </div>
        );
}
 
export default Pelicula;