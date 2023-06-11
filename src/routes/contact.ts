import { Router } from "express";
import { checkJwt } from '../middleware/session';
import { getContactos, postContacto, getContacto,updateContacto, deleteContacto, getManyContactos } from "../controllers/contact";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getContactos)
router.get("/:id", checkJwt, getContacto)
router.get("/many/", checkJwt, getManyContactos)
router.post("/",  checkJwt, postContacto);
router.put("/:id",  checkJwt, updateContacto)
router.delete('/:id',  checkJwt, deleteContacto)

export {router}