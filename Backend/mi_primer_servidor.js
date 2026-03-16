const express =require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hola, mundo!');
});

app.get('/json', (req,res) => {
    res.json({ mensaje: '¡Hola, mundo en formato JSON!' });
});

app.get('/datos', (req, res) => {
  res.json({ mensaje: '¡Jose, Roldan tengo 16 y estudio en la salle en formato DATOS!' });
});

app.listen(3000, () => {
    console.log('servidor escuchando en el puerto 3000');
});