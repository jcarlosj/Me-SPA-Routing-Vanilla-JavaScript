import { siteName } from '../helpers/global.helpers.js';

export default class NotFoundController {
    #pageTitle;
    #pageHtml;

    constructor( title ) {
        console.log( 'Not Found Controller!' );

        this.#pageTitle = title;
        this.#pageHtml = document.querySelector( '#root' );
        
        this.displayTitle();
    }

    displayTitle() {
        this.#pageHtml.querySelector( '[data-page-title]' ).innerHTML = `${ this.#pageTitle } Page`;
        document.title = `${ siteName } - ${ this.#pageTitle }`;
    }
}