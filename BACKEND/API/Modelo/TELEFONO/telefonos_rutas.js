const { Router } = require('express');
const controller = require('../../Controlador/telefonos_controlador');
//checked
const router = Router();

router.get('/', controller.get);
router.get("/:id", controller.getById);
router.post("/", controller.add);
router.delete("/:id", controller.remove);
router.put("/:id", controller.update);

module.exports = router;