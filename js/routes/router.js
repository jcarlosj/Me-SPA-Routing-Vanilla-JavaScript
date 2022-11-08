import { routes } from './routes.js';


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
        path =  window.location.hash.slice( 1 ) || '/',             // Obtiene el path /#/ de la URL y elimina el /#
        { urlTemplate, title } = resolveRoute( path ),              // Verifica si la ruta existe.
        response = await fetch( urlTemplate );
    
        response.body.title = title;
        console.log( response.body );
    const
        htmlPage = await response.text();


    document.querySelector( '#root' ).innerHTML = htmlPage;
}