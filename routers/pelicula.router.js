const express=require('express');
const router=express.Router();
const peliculaController=require('../controllers/peliculas.controllers');

router.get("/",peliculaController.getPeliculas);

router.get("/:peliculaId",peliculaController.getPeliculas);

router.post("/",peliculaController.newPelicula);

router.put("/:peliculaId",peliculaController.updatePelicula);

router.delete("/:peliculaId",peliculaController.deletePelicula);

module.exports=router;