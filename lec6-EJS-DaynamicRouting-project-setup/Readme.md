1.  initialize project with npm { npm init -y }
2.  install express { npm i express }
3.  setting parsers for form

        Example:

            app.use(express.json());
            app.use(express.urlencoded({ extended: true }));

4.  setting up EJS
        * install ejs from npm { npm i ejs }
        ** setup ejs as a view engine
