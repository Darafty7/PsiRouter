import { Router } from "express";
import multer from 'multer';
//Importa el controlador aprendizController
import {  get , post } from "../controllers/enfermeraController.js";
const router = Router()
const storage = multer({ dest: 'public/images/' });
router.get('/enfermera', get);
// router.post('/upload', storage.single('imagen'), update);

router.post('/upload', storage.single('imagen'), post);



export default router;