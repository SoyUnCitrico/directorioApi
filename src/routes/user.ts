import { Router } from 'express';
import { checkJwt } from '../middleware/session';
import { getUsuario, getUsuarios, deleteUsuario } from '../controllers/user';

const router = Router();
router.get("/", checkJwt, getUsuarios);
router.get("/:id", checkJwt, getUsuario);
router.delete("/:id", checkJwt, deleteUsuario);

export { router }