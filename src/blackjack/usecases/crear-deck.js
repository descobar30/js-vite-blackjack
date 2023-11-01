import _ from 'underscore';

// export const miNombre = 'Dario';
// Esta función crea un nuevo deck

/**
 * Esta función crea un nuevo deck(baraja)
 * @param {Array<String>} tiposDeCartas Ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo arreglo de baraja de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

     if( !tiposDeCartas ||  tiposDeCartas.length === 0 ) 
         throw new Error('tiposDeCartas es Obligatorio como un arreglo de string');
    
         if( !tiposEspeciales ||  tiposEspeciales.length === 0 ) 
         throw new Error('tiposEspeciales es Obligatorio como un arreglo de string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}

//  export default crearDeck; //Se deja importar con cualquier nombre por Ej: cualquierNombreParaCrearNuevoDeck