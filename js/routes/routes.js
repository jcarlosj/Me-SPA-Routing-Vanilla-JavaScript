import { homeInit } from '../controllers/home.controller.js';
import { aboutInit } from '../controllers/about.controller.js';
import { contactInit } from '../controllers/contact.controller.js';
import { notFoundInit } from '../controllers/404.controller.js';


export const routes = {
    "/" : {
        title: "Home",
        urlTemplate: "../pages/home.html",
        controller: { init: homeInit }
    },
    "/about" : {
        title: "About",
        urlTemplate: "../pages/about.html",
        controller: { init: aboutInit }
    },
    "/contact" : {
        title: "Contact",
        urlTemplate: "../pages/contact.html",
        controller: { init: contactInit }
    },
    404: {
        title: "Page not found",
        urlTemplate: "../pages/404.html",
        controller: { init: notFoundInit }
    }
};