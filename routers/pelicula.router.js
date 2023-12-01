const express=require('express');
const router=express.Router();
const peliculaController=require('../controllers/peliculas.controllers');
const authMiddleWare=require('../utils/auth.middleware');

router.get("/",peliculaController.getPeliculas);

router.get("/:peliculaId",peliculaController.getPeliculasById);

router.post("/",authMiddleWare.authenticateToken,peliculaController.newPelicula);

router.put("/:peliculaId",peliculaController.updatePelicula);

router.delete("/:peliculaId",peliculaController.deletePelicula);

module.exports=router;