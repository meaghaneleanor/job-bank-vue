import { i18n } from '../plugins/i18n.js';
import router from '../router/index.js';

export const translate = {
  methods: {
    /*
        This method returns either a route alias or path based on
        the users locale and is used for router links. Since route paths
        are defined in English, there needs to be a check to determine
        whether or not to use the route alias or route path so the user is 
        directed to the correct route based on their locale.
    */
    translateRoute: function(routeName) {
      const routes = router.options.routes;
      
      if (routes) {
        let correctRoute;
        routes.map((route) => correctRoute = route.name === routeName ? route: correctRoute);

        return i18n.locale === 'en' ? correctRoute.path : correctRoute.alias;
      }
    }
  }
};
