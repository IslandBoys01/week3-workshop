var express = require('express'); // requires the express module

var app = express(); // initialises or creates express object

var bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.json());

app.use(express.static(__dirname + '/www')); // location of static files in directory

var http = require('http').Server(app);



let server = http.listen(3000 ,() => {
    var d = new Date();
    var m = d.getHours();
    var n = d.getMinutes();
    console.log('Server has been started at' + n + ':' + m);
});
    // print to console
    // const logger = (req, res, next) => {
    //     console.log("hello world")
    //     next();
    // }

    // route for test page
     app.get('/', (req, res) =>{
        res.sendFile(__dirname + '/www/form.html');
        });

    // route for account page 
    app.get('/account', (req, res) =>{
        res.sendFile(__dirname + '/www/account.html');
        });

    // route for login page
    // app.get('/form', (req, res) =>{
    //     res.sendFile(__dirname + '/www/form.html'); 
        //res.send(users);
        
        
        // loops array
        // for(let i = 0; i < users.length; i++){
        //     if(users[i].password == "123"){
        //         console.log(users[i].email)

        //     }
        // }

    // post 
    app.post('/api/login', (req, res,) => {
        let users = [{'email': "Sam@example.com", 'password': '123'}, {'email': "Mike@example.com", 'password': '123'}, {'email': "Fred@example.com", 'password': '123'}]

        if(!req.body){
            return res.sendStatus(400);
        }
        
        person = {};
        person.email = req.body.email;
        person.psswd = req.body.psswd;
        person.valid = false;

        for(let i=0;i<users.length;i++){
            if(req.body.email == users[i].email && req.body.psswd == users[i].password){
                person.valid = true;
            }
        }
        
        res.send(person);

    });

    