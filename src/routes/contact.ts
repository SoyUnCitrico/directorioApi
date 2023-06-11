import { Router } from "express";
import { checkJwt } from '../middleware/session';
import { getContactos, postContacto, getContacto,updateContacto, deleteContacto, getManyContactos } from "../controllers/contact";

const router = Router();

router.get("/", getContactos)
router.get("/:id", checkJwt, getContacto)
router.get("/many/contacts", checkJwt, getManyContactos)
router.post("/",  checkJwt, postContacto);
router.put("/:id",  checkJwt, updateContacto)
router.delete('/:id',  checkJwt, deleteContacto)

export {router}