const express = require('express')
const {
    userCart,
    getUserCart,
    emptyCart,
    saveAddress,
    applyUserToUserCart,
    createOrder,
    orders,
    addToWishList,
    wishList,
    removeFromWishList,
    createCashOrder
} = require('../controllers/user')
const { authCheck } = require('../middlewares/auth')

const router = express.Router()

router.post('/user/cart', authCheck, userCart)
router.get('/user/cart', authCheck, getUserCart)
router.delete('/user/cart', authCheck, emptyCart)
router.post('/user/address', authCheck, saveAddress)

router.post('/user/order', authCheck, createOrder)
router.post('/user/cash-order', authCheck, createCashOrder)
router.get('/user/orders', authCheck, orders)

//coupon
router.post('/user/cart/coupon', authCheck, applyUserToUserCart)

// wishlist // add to WishList // remove from WishList
router.post('/user/wishlist', authCheck, addToWishList)
router.get('/user/wishlist', authCheck, wishList)
router.put('/user/wishlist/:productId', authCheck, removeFromWishList)



module.exports = router