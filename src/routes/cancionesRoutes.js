
let express = require("express")
let router = express.Router();
const mainController = require("../controllers/mainController.js")



router.get("/", mainController.list)

router.post("/", mainController.create)

router.get("/:id", mainController.detail)

router.put("/:id", mainController.edit)

// router.delete("/:id", mainController.delete)


module.exports = router 





