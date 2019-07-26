# **Job Bank Front-End**
This project runs the job bank front-end for Ontario.ca. 
* The front-end framework is built with Vue and uses styles & BEM naming conventions/components from the [ods-theme](https://git.ontariogovernment.ca/frontend/ods-theme) & [minifront](https://git.ontariogovernment.ca/frontend/minifront) projects. 
* [Routing](#routing) is handled by vue-router.
* [Translations](#translations) are handled by vue-i18n.
* [Tests](#testing) are handled through Jest.


___
## **Running the project**
___
This project requires node 12.4.0. This means a node version of 12.4.0 or higher. Look at the *`.nvmrc`* file for more information.

In the project directory:
* Install dependencies using `npm install`
* Compile and run the server locally using `npm run serve`

**Docker**
This project is also equipped with Docker containers, and you can choose to run it using Docker instead of `npm` if you prefer. A `docker-compose.yml` file has been provided. To run it with docker, assuming you have the dependencies installed, run the following commands:

```
docker-machine start default
eval $(docker-machine env)
docker-compose up
```

You will be able to access the server at `http://192.168.99.100/`. You may want to setup [port forwarding](https://www.jhipster.tech/tips/020_tip_using_docker_containers_as_localhost_on_mac_and_windows.html) in virtualbox or in hosts if you would like to be able to go directly to `http://localhost`.


**Linting**
To run ESLint and lint files, use the command `npm run lint`.


---
## **Project Organization**
---
This project was built using Vue CLI with a basic Babel + ESLint setup. For more information, refer to [the Vue CLI docs](https://cli.vuejs.org/).

The majority of any new development will happen in the  **src** folder. Within this folder, there are 4 sub-folders and two main files:

**Assets** 
* Includes all SASS and font files.
  
**Components**:
* Includes all core components for the job-bank project. 
* The **common** folder includes components that are used throughout many pages of the job-bank application (ex: Header, footer, etc.);

**Plugins**: 
* Includes all plugin files.
* Custom plugins that are added in the plugins folder must be imported into the *`main.js`* file and instatiated in the Vue instance to take effect.

**Translations**:
* Includes Vue i18n translations files.
  
**Files**:
* The *`main.js`* file instantiates the main Vue instance and sets all other plugins and instances as options to the Vue instance (ex: i18n, foundation, router, etc.). It also mounts the Vue instance to the app component.

* The *`App.vue`* file is the main component where the Vue instance is mounted. It contains the Header and Footer components used throughout the whole job bank project. There is a router-view component which renders other components according to the route a user is on.

Any static HTML or image files can be found in the **public** folder, and referenced from anywhere in the project with a forward slash and link to the file name. **Ex**:

    <img src="/logo.jpg" />

---
### **Routing**
---
Routing for this project is handled through vue-router. Within the main project directory's **src** folder, there will be another folder called **router** which handles most of the logic related to routing. The following routing files are found under the **src/router** file structure:

* The *`index.js`* file, which creates the Vue Router instance, sets the router to use history mode. A routes option is also passed to the router instance linking to the routes defined in the *`routes.js`* file. There is also a beforeEach navigation guard, which determines the locale of the incoming route and sets the i18n.locale accordingly.

* The *`routes.js`* file contains all the route patterns for the project. Each route must include:
   1. A unique **name** (this gets used for router-links - more info in [router-links](#Creating-Links))
   2. A **path** defined in English
   3. An **alias** field which utilizes the translatedAlias function to retrieve the French path. Note that the path passed to the function must match the path defined for English.
   4. The **component** the path will render

When the main language is toggled (controlled by the *switchLocale* function in the **SiteMenu** component), the translations for the route paths are searched for in the `route-translations.js` file found in the **translations** folder. Each route should be defined here by locale, with the key representing the locale's path, and the value representing the opposite locale's path.

### ***Creating Links***
**Internal Links (Router-Links)**

Internal links (links within the job bank application), are created with the InternalLink job-bank component. The InternalLink component uses vue-router's router-link element behind the scenes. It renders as an anchor tag with correct href based on the attribute values passed in.

The InternalLink component requires two element attributes: the url and the link-text. The url must always be in single quotes, since that's how it's defined in the routes. The link-text attribute would likely be generated using i18n's translate method, also passed with single quotes. 

An example of how the Internal Link component would be used looks like:

    <InternalLink 
      :url="'jobs'"
      :link-text="$t('jobPage.title')" />

**External Links**

For creating external links (links that go outside of the job bank application), a normal link element should be used. The links should always be absolute URLs and prefixed with either `http://` or `https://`.

    <a href="http://www.ontario.ca">Home</a> 

---
### **Translations**
---
Translations for this project are handled with vue-i18n, and can be found within the main projects **src** folder under **translations**. 

The VueI18n instance is instatiated in the plugins folder in the *`src/plugins/i18n.js`* file. This instance imports the settings and files from the *`src/translations/index.js` file. It also sets a defaut and fallback locale of english.

* The *`index.js`* file within the translations folder exports the two main locale files our project handles - english and french - from the **locales** folder. Vuei18n's *$t* method is used within component templates to reference the translated result from **locales** files. The locale is determined and set by the *switchLocale* function in the **SiteMenu** component.

---
### **Testing**
---
Libraries/Tools used:
* Jest - Testing framework
* Vue-Jest - Jest Vue transformer with source map support
* Vue/Test-Utils - The official unit testing utility library for Vue.js

After the dependencies have been installed, tests can be run using the `npm run test` script. 

The test directory generally maps the same file structure as the main directory of the project.

This project uses Jest's snapshot testing for the Vue components. When the tests are run, the snapshots are compared to the components' current HTML. This means that if any changes are made to the component templates, the snapshot tests will fail. If any changes to the templates are made, the snapshots will need to be updated before running the tests again. This can be done using the `npm run snapshot` script before running the test script. 
