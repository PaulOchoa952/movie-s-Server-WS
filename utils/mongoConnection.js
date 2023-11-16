const mongoose =require('mongoose');

mongoose.connect
(
    'mongodb+srv://root:1145Orbea@cluster0.prnnmbt.mongodb.net/libreria-db?retryWrites=true&w=majority'
)
.then(() => console.log('Conectado a la base de datos'))
.catch((err) => console.log(err));