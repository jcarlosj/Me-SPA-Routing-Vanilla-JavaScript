import { siteName } from '../helpers/global.helpers.js';


export default class ContactController {
    #pageTitle;
    #pageHtml;

    constructor( title ) {
        console.log( 'Contact Controller!' );

        this.#pageTitle = title;
        this.#pageHtml = document.querySelector( '#root' );
        
        this.displayTitle();
    }

    displayTitle() {
        this.#pageHtml.querySelector( '[data-page-title]' ).innerHTML = `${ this.#pageTitle } Page`;
        document.title = `${ siteName } - ${ this.#pageTitle }`;
    }
}