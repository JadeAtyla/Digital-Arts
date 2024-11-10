const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port =  5111;
app.listen(5111, ()=>{
    console.log(`Listening to ${port}`);
});

module.exports = app;