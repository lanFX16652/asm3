import cartModel from "../models/cartModel.js"

export const addProductIntoCart = async (req, res, next) => {
    const { qty, productId } = req
    let currentCart

    //  If user have login
    if (req.session.userId) {
        try {
            const cart = await cartModel.find({ userId: req.session.userId })

            if (cart) {
                cart.products = cart.products.map(product => {
                    if (product._id === productId) {
                        product.qty += qty
                    }

                    return product
                })
            }

            const newCart = cartModel.create({
                userId: req.session.userId,
                products: [
                    {
                        productId,
                        qty
                    }
                ]
            })

            currentCart = cart ? cart : newCart
        } catch (error) {
            next(error)
        }

    }

    res.status(200).json({
        cart: currentCart
    })
}
