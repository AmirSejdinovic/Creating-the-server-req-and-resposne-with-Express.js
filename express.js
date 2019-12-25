//Here we import the express and storing it in the varialbe which we use in the our code. Whith this code node will look in the folder node modules and search for express folder
let express = require("express");
//Caling up the express method which will create new server and storing it into the variable ourApp
let ourApp = express();
//This is a boilerpalte code from express.js which enables express to detect input values and pase it into the request
ourApp.use(express.urlencoded({extended: false}));
//Here I attached to the ourApp (server) method of get and this method recives two arguments first is the url in my case this is a home page or root and second paramtetar is a function which will be trigered when someone request the homepage url. This functon recives two arguments and this are request and resposne
ourApp.get('/', function(req, res){
  //Attaching on res parametar the .send node method, this method will show content when someone request the url
   res.send(`
     <form action="/answer" method="POST">
       <p>What color is the sky on a clear and sunny day?</p>
      <input name="skyColor" autocomplete="off">
      <button>Submit Answer</button>
     </form>
   `)
} )

//Here i call the method of post on the ourApp. This run the function if user input somethin in form on home page and submit it 
ourApp.post('/answer', function(req, res){
  //Here I check if the request in the body have the html element name the skyColor this is our input field and if it is blue then do the code inside this code block
  //toUpperCase() is method which will convert all inputs leters in upper case and setig up the comparision to upper case we have build case insensitve app
    if(req.body.skyColor.toUpperCase() == "BLUE"){
      res.send(`
       <p>Congrats that is the corect answer!</p>

       <a href="/">Back to homepage</a>
      `);
    }else{
      res.send(`
       <p>Sorry that is incorrect.</p>

       <a href="/">Back to homepage</a>
      `);
    }
})

//The get method will display the function tekst when someone got with get request to the answer section
ourApp.get('/answer', function(req, res){
  res.send("Are you lost? There is nothing to se here");
})
//Calling up the variable with express method and attaching on it the listen method and I in this case pased the argument of 300 this means that server will listen the prot of 300
ourApp.listen(300)

