
let express = require("express")
let router = express.Router();
const mainController = require("../controllers/mainController.js")



router.get("/", mainController.listado)




module.exports = router 





