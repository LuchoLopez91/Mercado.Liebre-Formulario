const express = require('express');
let app = express();
const PORT = 3030;
const path = require('path')

app.use(express.static('public'));

app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname,"/views/index.html"))
})

app.get("/registro",(req,res)=>{
    return res.sendFile(path.join(__dirname,"/views/registro.html"))
})

app.get("/login",(req,res)=>{
    return res.sendFile(path.join(__dirname,"/views/login.html"))
})


app.listen(PORT, () => console.log(`El servidor esta escuchando en el
puerto ${PORT}
http://localhost:${PORT}`));