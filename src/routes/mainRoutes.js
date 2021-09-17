
let express = require("express")
let router = express.Router();
const mainController = require("../controllers/mainController.js")



router.get("/", mainController.list)

router.post("/", mainController.create)

router.get("/:id", mainController.detail)


module.exports = router 





