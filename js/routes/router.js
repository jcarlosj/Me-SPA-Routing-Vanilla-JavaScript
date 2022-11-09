import { routes } from './routes.js';
// import { init } from '../controllers/home.controller.js';


const resolveRoute = ( path ) => {
    try {
        if( ! routes[ path ] )
            return routes[ 404 ];

        return routes[ path ];
    }
    catch( e ) {
        throw new Error( `Route ${ path } not found` );
    };
};

export const router = async ( event ) => {
    console.log( window.location.hash );

    const 
        path =  window.location.hash.slice( 1 ) || '/',                 // Obtiene el path /#/ de la URL y elimina el /#
        { urlTemplate, title, controller } = resolveRoute( path ),      // Verifica si la ruta existe.
        response = await fetch( urlTemplate ),                          // Obtiene la respuesta
        htmlPage = await response.text();                               // Obtiene el HTML de la pagina

    controller.init();                                                  // Ejecuta el controlador respectivo

    document.querySelector( '#root' ).innerHTML = htmlPage;             // Inyecta el HTML en la SPA
}