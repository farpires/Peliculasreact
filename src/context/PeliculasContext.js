import React,{Component} from 'react';
import axios from 'axios';

const PeliculasContext = React.createContext();
export const PeliculasConsumer = PeliculasContext.Consumer;

class PeliculasProvider extends Component {
    token ='23688c5ae859fb4e6f87050974120dde';
    state = { 
        peliculas : []
     }

    obtenerPeliculas = async (busqueda)=>{

        let url = `https://api.themoviedb.org/3/search/multi?api_key=${this.token}&query=${busqueda.nombre}&page=1&include_adult=false`;

        //genre_ids sacar genero id
      
        const peliculas = await axios(url);
        // console.log(peliculas.data.results);

        this.setState({
            peliculas: peliculas.data.results
        })

    }
    render() { 
        return ( 
            <PeliculasContext.Provider
            value = {{
                peliculas: this.state.peliculas,
                obtenerPeliculas: this.obtenerPeliculas,
            }}
            >
                {this.props.children}
            </PeliculasContext.Provider>
         );
    }
}
 
export default PeliculasProvider;