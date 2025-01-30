import React from 'react';

class Presentational extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quote: "Apriete el botón para generar su frase",
            author: "Admin",
            quoteA: [
              ["¿Si no puedes darme poesía, ¿no puedes al menos darme ciencia poética?”", "Ada Lovelance"] ,
              ["Podemos ver poco del futuro, pero lo suficiente como para darnos cuenta de que hay mucho por hacer", "Alan Turing"] ,
              ["Si no actúas como piensas, terminaras pensando como actúas", "Blaise Pascal"] ,
              ["Se comenten muchos menos errores usando datos incorrectos que no empleando dato alguno", "Charles Babbage"] ,
              ["Si a los hombres se les dio el lenguaje para ocultar sus pensamientos, entonces el propósito de los gestos fue revelarlos.", "John Napier"] ,
              ["El alma es el espejo de un universo indestructible", "Gottfried Wilhelm Leibniz"] ,
              ["Ningún hombre tiene derecho a mostrarse superior a otro, porque quien no supera en inteligencia, podría superar en bondad", "Leonardo Torres Quevedo"] ,
              ["Si la gente no cree que las matematicas son simples, es porque no se dan cuenta de lo complicada que es la vida", "John von Neumann"] ,
              ["Si tienes una buena idea, ¡adelante!, es mucho más fácil pedir perdón que pedir permiso.", "Grace Hopper"] ,
            ]
        }
        this.cambio = this.cambio.bind(this);
    }
    cambio(){
      let currentQ = this.state.quoteA[Math.floor(Math.random() * this.state.quoteA.length)];
      console.log(currentQ);
      this.setState({
            quote: currentQ[0],
            author: currentQ[1],
            quoteA: this.state.quoteA
      });
    }
    render() {
        return (
            <div className="App" id="App">
            <div id="Qbox" className="img-responsive">
              <p id="quote-p">
                {this.state.quote}
              </p>
              <div>===========o==========</div>
              <i id="author-p">
                {this.state.author}
              </i>
              <div id="buttoner">
                <button id="newQ-Button" onClick={this.cambio}>New Quote</button>
              </div>
            </div>
          </div>
        );

    }
}
export default Presentational; 