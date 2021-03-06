import axios from 'axios'

export const getCoupons = async () =>
    await axios.get(`${process.env.REACT_APP_API}/coupons`)

export const createCoupon = async (coupon, authtoken) =>
    await axios.post(`${process.env.REACT_APP_API}/coupon`,
        { coupon },
        {
            headers: {
                authtoken
            }
        })

export const removeCoupon = async (coupon, authtoken) =>
    await axios.delete(`${process.env.REACT_APP_API}/coupon/${coupon}`, {
        headers: {
            authtoken
        }
    })

