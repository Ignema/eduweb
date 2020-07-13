
let express = require("express");

let app = express();

app.get("/",(req,res)=>{

    res.status(200).json({"name": "LOL"});

});

app.listen(3000);