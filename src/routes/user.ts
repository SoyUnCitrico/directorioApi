import { Request, Response, Router } from 'express';
import { getUsuario, getUsuarios, deleteUsuario } from '../controllers/user';

const router = Router();
router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.delete("/:id", deleteUsuario);

export { router }