const express = require( "express" );
const app = express();
const port = 3000;
const bodyParser = require( "body-parser" );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.get( '/', ( req, res ) => 
   {
    
    res.sendFile( __dirname + "/index.html" );
    
    res.send( "Hello World!" );
    
   });

app.get( "/bmicalculator", ( req, res ) => 
   {
    
    res.sendFile( __dirname + "/bmiCalculator.html");
    
   });

app.post( "/bmicalculator", ( req, res ) =>
   {
    
    var weight = parseFloat( req.body.weight );
    var height = parseFloat( req.body.height );
    var bmi = weight / ( height ** 2 );
    
    res.send( "Your BMI is " + String( bmi ) );
    
   });

app.listen( port, () => 
   {
    
    console.log( "Server is running on port " + String( port ) );
    
   }); 