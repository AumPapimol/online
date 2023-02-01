const express = require('express')
const router = express.Router()
const {
  getflashsale,
  getLod,
  getBeauty,
  getFashion,
  getSuper,
  getHousehold,
  getFood
} = require("../controller/conpromotion")


router.get("/flashsale",getflashsale)
router.get('/lod',getLod)
router.get('/super',getSuper)
router.get('/food',getFood)
router.get('/fashion',getFashion)
router.get('/beauty',getBeauty)
router.get('/household',getHousehold)

module.exports = router; 