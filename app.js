const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

const port = process.env.PORT || 3001;

app.listen( port, () => console.log('Servidor funcionando') );

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, './src/views/home.html'))
});
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./src/views/register.html'));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./src/views/login.html'));
});
app.post('/register',(req, res) => {
    res.redirect('/');
});
app.post('/login',(req, res) => {
    res.redirect('/');
});
