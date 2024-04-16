const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(logger("dev"));


let Party = [];

app.get('/',(req,res)=>{
        res.send(`You have ${Party.length || "no"} people in your party.`);
    });  

app.post('/',(req,res)=>{
        if (req.query.mem){
            try{
                Party.push(req.query.mem);
            }
            catch{
                console.log(err)
            }
        }
        res.send(Party);
    });

    app.put('/', (req, res) => {
        if (req.query.index && req.query.lang) {
            Party[req.query.index] = req.query.mem;
            res.send(Party[req.query.index]);
        } else {
            res.send('No Update was made');
        }
        //localhost:3001/?lang=c++&index=0
        
    });

app.delete('/', (req, res) => {
    if (req.query.index) {
        Party[req.query.index] = undefined;
        res.send(req.query.index + ' was removed');
    } else {
        res.send('Nothing was removed. Send an index');
    }
});


// app.get('/', (req, res) => {
//     res.send('Welcome to the Cave')
// })
// app.get('/valk', (req, res) => {
//     res.send('This kinda rocks')
// })

app.listen(8080, () => {
    console.log('listening on port 8080')
})