const express = require('express');
const app = express ();

app.listen(3000);

app.get('/', (req,res) => {
   // res.send('<p>Welcome</p>');
   res.sendFile('./views/index.html',{root: __dirname});
});
app.get('/about', (req,res) => {
    //res.send('<p>This is about page</p>');
    res.sendFile('./views/about.html',{root: __dirname});
});
app.get('/about-us',(req,res) => {
    res.redirect('/about');
});
//Keep this always at last
app.use((req,res) => {
    res.status(404).sendFile('./views/404.html',{root: __dirname});
});