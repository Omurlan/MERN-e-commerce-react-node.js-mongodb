const express = require('express')
const { create, remove, list } = require('../controllers/coupon')

const router = express.Router()

// middlewares 
const { authCheck, adminCheck, } = require('../middlewares/auth')

//routes
router.post('/coupon', authCheck, adminCheck, create)
router.get('/coupons', list)
router.delete('/coupon/:couponId', authCheck, adminCheck, remove)




module.exports = router