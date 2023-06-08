import { Router } from "express";
import { getContactos, postContacto, getContacto,updateContacto, deleteContacto } from "../controllers/contact";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", logMiddleware, getContactos)
router.get("/:id", getContacto)
router.post("/", postContacto);
router.put("/:id", updateContacto)
router.delete('/:id', deleteContacto)

export {router }