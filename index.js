/*
    몽고디비 user : gh  pw: abcd1234
*/

const express = require('express');
const app = express();
const port = 5000;

// 몽구스 init
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gh:abcd1234@react.wagsr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));