# divinitycastdown.com
The website for the Toronto metal band Divinity Cast Down

##Documentation:

###Making new pages

Every page is composed of 3 files:

1. An **HTML** view file containing the html layout of the page (as well as any static content)
2. A **JS** controller file containing any logic necessary for the page
3. A **CSS** file containing any styles specific to that page

When creating a new page you will need to:

1. Create a new **HTML** file in the `/views/` folder. Call it `page.html` where *page* is the name of the page (ie *home*, *about*)
2. Create a new **CSS** file in the `/css/`folder. Call it `page.css`
3. Add a line to the `/index.html` to associate the new **CSS** file: `<link rel="stylesheet" href="css/app.css">`
4. *(Optional)* Create a new **JS** file in the `/js/controllers/` folder. Call it `pageCtrl.js`
5. *(Optional)* Add a line to the `/index.html` to associate the new **JS** file: `<script src="js/controllers/pageCtrl.js"></script>`
6. Add an entry to the `$routeProvider` *(the route can be any string but must start with a `/`)*
```
    .when('/page', {
      templateUrl: 'views/page.html',
      controller: 'PageCtrl' //if this page has a controller
    })
```

Eeach controller file should look like the following:
```
(function() {
    
    var PageCtrl = function($scope) {
        initCtrl();
        
    }

    dcd.com.controller('PageCtrl', PageCtrl)
}());
```