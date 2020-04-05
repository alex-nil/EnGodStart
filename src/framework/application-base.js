import {NavigationBar} from '../ui/navigation-bar.js';
import {Footer} from '../ui/footer.js';
export class ApplicationBase {
 
    constructor(title) {
        this.title = title;
        this.NavigationBar = new NavigationBar(this.title);
        this.defaultRoute = null;
        this.routeMap = {};
        this.Footer = new Footer();
    }
    
    addRoute(id, pageObject, defaultRoute = false) {
        this.NavigationBar.addLink(id, '');

        this.routeMap[id] = pageObject;
        
        if(defaultRoute) {
            this.defaultRoute = id;
        }
    }
    
    activateRoute(route) {
        let content = this.NavigationBar.element.find('.page-content');
        content.empty();

        this.routeMap[route].appendToElement(content);
    }
    show(element) {
        this.NavigationBar.appendToElement(element);
        this.Footer.appendToElement(element);
        this.NavigationBar.element.find('.mdl-navigation__link').click((event) => {
            let route = event.target.innerHTML;
            console.log(route);
            console.log(route);
            this.activateRoute(route);
        });

        if (this.defaultRoute) {
            this.activateRoute(this.defaultRoute);
        }
    }
    
}