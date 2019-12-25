//Here we import the express and storing it in the varialbe which we use in the our code. Whith this code node will look in the folder node modules and search for express folder
let express = require("express");
//Caling up the express method which will create new server and storing it into the variable ourApp
let ourApp = express();
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

//Calling up the variable with express method and attaching on it the listen method and I in this case pased the argument of 300 this means that server will listen the prot of 300
ourApp.listen(300)

