import React, { Component } from "react";
import axios from "axios";

//crear el context
const GenerosContext = React.createContext();
export const GenerosConsumer = GenerosContext.Consumer; //es para exportar solo el generoconsumer y no toda la secuencia

//esta clase se llama provaider pero no es el provaider tal de context
class GenerosProvider extends Component {
  token = "23688c5ae859fb4e6f87050974120dde";

  state = {
    generos: []
  };

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.token}`;
    let generos = await axios.get(url);
   
    this.setState({
      generos: generos.data.genres
    });
  };

  render() {
    return (
      //Provaider
      <GenerosContext.Provider
        value={{
          generos: this.state.generos,
          holaMundo: "Hola Mundo"
        }}
      >
        {this.props.children}
      </GenerosContext.Provider>
    );
  }
}
//    {this.props.children} con este linea, se puede comunicar con APP.js

export default GenerosProvider;
