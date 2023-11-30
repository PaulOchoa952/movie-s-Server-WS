const express=require('express');
const morgan=require('morgan');

require('./utils/mongoConnection');

const peliculaRouter=require('./routers/pelicula.router');
const UsersRouter=require('./routers/user.router');


const app=express();
const port=3003;
app.use(morgan('dev'));

app.get("/",(req,res)=>{
    res.send("Bienvenido a peliculas Api");
});
app.use(express.json({limint:"50mb"}));

app.use('/peliculas',peliculaRouter);
app.use('/users',UsersRouter);

app.listen(port,()=>{
    console.log("Servidor iniciado http://localhost:" + port );
});