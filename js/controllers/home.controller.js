import { siteName } from '../helpers/global.helpers.js';

export default class HomeController {
    #pageTitle;
    #pageHtml;

    constructor( title ) {
        console.log( 'Home Controller!' );

        this.#pageTitle = title;
        this.#pageHtml = document.querySelector( '#root' );
        
        this.displayTitle();
    }

    displayTitle() {
        this.#pageHtml.querySelector( '[data-page-title]' ).innerHTML = `${ this.#pageTitle } Page`;
        document.title = `${ siteName } - ${ this.#pageTitle }`;
    }
}