
// import crearDeck, {miNombre} from './usecases/crear-deck'; //permite importar datos default(crearDeck) o individuales(miNombre)
// import { crearDeck as crearNuevoDeck} from './usecases/crear-deck'; // otra manera de importar con alias

//import { formatPostcssSourceMap } from 'vite';

// import { cualquierNombreParaCrearNuevoDeck} from './usecases/crear-deck'; // Importar un valor exportado con defaul se puede colocar cualquier nombre
export { crearDeck } from './crear-deck';
export { pedirCarta } from './pedir-carta';
export { valorCarta } from './valor-carta';
export { turnoComputadora } from './turno-computadora';
export { crearCartaHtml } from './crear-carta-html';