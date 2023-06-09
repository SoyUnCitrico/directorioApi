import { Router } from 'express';
import { checkJwt } from '../middleware/session';
import { getUsuario, getUsuarios, deleteUsuario, updateUsuario } from '../controllers/user';

const router = Router();
router.get("/tT", checkJwt, getUsuarios);
router.get("/:id", checkJwt, getUsuario);
router.put("/:id", checkJwt, updateUsuario);
router.delete("/:id", checkJwt, deleteUsuario);

export { router }