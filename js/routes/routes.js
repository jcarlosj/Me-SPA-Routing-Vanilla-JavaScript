import HomeController from '../controllers/home.controller.js';
import AboutController from '../controllers/about.controller.js';
import ContactController from '../controllers/contact.controller.js';
import NotFoundController from '../controllers/404.controller.js';


export const routes = {
    "/" : {
        title: "Home",
        urlTemplate: "../pages/home.html",
        controller: { init: HomeController }
    },
    "/about" : {
        title: "About",
        urlTemplate: "../pages/about.html",
        controller: { init: AboutController }
    },
    "/contact" : {
        title: "Contact",
        urlTemplate: "../pages/contact.html",
        controller: { init: ContactController }
    },
    404: {
        title: "Page not found",
        urlTemplate: "../pages/404.html",
        controller: { init: NotFoundController }
    }
};