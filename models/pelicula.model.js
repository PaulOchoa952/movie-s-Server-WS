const moongose=require('mongoose');

let PeliculaSchema = new moongose.Schema({
    nombre:{type:String},
    director:{type:String},
    año:{type:String},
    duracion:{type:String},
    clasificacion:{type:Number},
    stock:{type:Number}
});

module.exports=moongose.model('pelicula',PeliculaSchema,'pelicula');