
let express = require("express")
let router = express.Router();
const mainController = require("../controllers/mainController.js")



router.get("/canciones", mainController.albumList)


module.exports = router 


