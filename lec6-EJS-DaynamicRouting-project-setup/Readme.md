1.  initialize project with npm { npm init -y }
2.  install express { npm i express }
3.  setting parsers for form

        Example:

            app.use(express.json());
            app.use(express.urlencoded({ extended: true }));

4.  setting up EJS </br>
        * install ejs from npm { npm i ejs } </br>
        ** setup ejs as a view engine

5. setting up public static file </br>
        * first of all go to index.js and write the code </br>
                code: </br>
                const path = require("path"); </br>
                app.use(express.static(path.join(__dirname, 'public'))); </br>
        
        ** create public folder and in the public folder create 3 folder (images, javascripts, stylesheet)

