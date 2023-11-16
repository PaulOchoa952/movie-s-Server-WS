const Pelicula = require('../models/pelicula.model');

exports.getPeliculas = async (req, res) => {
    try {
        const peliculas= await Pelicula.find();

       return res.status(200).json({
        message: "Consulta de libros",
        data:peliculas
       });
    }catch (error) {
        return res.status(500).json({
            message: "Error al consultar libros",
            data:error
        });
    }
}
exports.getPeliculas = async (req, res) => {
    const peliculaId=req.params.peliculaId;
    try {
        const pelicula =await Pelicula.findById(peliculaId);
       return res.status(200).json({
        message: "Consulta de libro por ID:"+peliculaId,
        data:pelicula
       });

    }catch (error) {
        return res.status(500).json({
            message: "Error al consultar libros",
            data:error
        });
    }
}
//insert new book
exports.newPelicula = async (req, res) => {
    try {
        const {nombre,director,año,duracion,clasificacion,stock} = req.body;
        const newPelicula=new Pelicula({nombre,director,año,duracion,clasificacion,stock});
        await newPelicula.save();

       return res.status(200).json({
        message: "Pelicula creada con exito",
        data:newPelicula   
       });
    }catch (error) {
        return res.status(500).json({
            message: "Error al crear la pelicula",
            data:error
        });
    }
}

//update book
exports.updatePelicula = async (req, res) => {
    const peliculaId=req.params.peliculaId;
    newData=req.body;

    try {
        const updatePelicula= await Pelicula.findByIdAndUpdate(peliculaId,newData,{new:true});

    return res.status(200).json(
        {
            message: "Actualizar pelicula por Id:"+peliculaId,
            data:updatePelicula
        }
       
    );
    }catch (error) {
        return res.status(500).json({
            message: "Error al actualizar pelicula",
            data:error
        });
    }
}
//delete book
exports.deletePelicula = async(req, res) => {
    const peliculaId=req.params.peliculaId;
    try {
    await Pelicula.findByIdAndDelete(peliculaId);
    return res.status(200).json(
        {
            message: "Pelicula eliminada por Id:"+peliculaId,
        }
    );
    
    }catch (error) {
        return res.status(500).json({
            message: "Error al eliminar pelicula",
            data:error
        });
    }
}

