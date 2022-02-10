const express = require('express');
const bodyParser = require('body-parser');

//create an app to use express packages
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//to load css style
app.use(express.static("public"));

//to view ejs as template engine
app.set('view engine', 'ejs');

//to send html file to browser
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmi.html');
});

//to handle post request after calculating
app.post('/', (req, res) => {

    //bmi calculations
    function Calculate() {
        var age = "";
        var weight = parseFloat(req.body.weight);
        var height = parseFloat(req.body.height);
        var result = weight / ((height * height) / 100);
        var answer = "Your BMI Result is: " + result;

        res.render("/", answer);
    }
});

//to indicate on the terminal that server is running
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});