
import mongoose from 'mongoose'
import ProductModel from '../models/productModel.js'

const ObjectId = mongoose.Types.ObjectId

const getProducts = async (req, res, next) => {
    const { page, limit } = req.query

    try {
        const products = await ProductModel.find({})
        const totalProducts = await ProductModel.count()
        const totalPage = totalProducts / +limit

        return res.json({ products, totalProducts, totalPage, page })
    } catch (error) {
        next(error)
    }
}

const createProduct = async (req, res, next) => {
    if (isNaN(req.body.price)) {
        return next(new Error('price is not valid'))
    }


    //create product
    const newProduct = new ProductModel({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        long_desc: req.body.long_desc,
        short_desc: req.body.short_desc,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
        img4: req.body.img4,
    })

    //save to database
    try {
        const product = await newProduct.save();
        //return database
        return res.status(200).json({ product: product })
    } catch (error) {
        next(error)
    }

};

const getProductDetail = async (req, res, next) => {
    try {
        const id = req.params.id
        const productDetail = await ProductModel.findById(id)
        res.status(200).json(productDetail)
    } catch (error) {
        next(error)
    }
}

const getRelatedProduct = async (req, res, next) => {
    const category = req.query.category;
    const productId = req.query.id;

    try {
        const relatedProducts = await ProductModel.find({
            category: {
                $eq: category
            },
            _id: {
                $ne: new ObjectId(productId)
            }
        })

        // const relatedProducts = await ProductModel.aggregate([
        //     {
        //         $match: {
        //             category: {
        //                 $eq: category
        //             }
        //         }
        //     },
        //     {
        //         $match: {
        //             _id: {
        //                 $ne: new ObjectId('64aea5e066b6bea8a0b4d8ea')
        //             }
        //         }
        //     }
        // ])

        return res.status(200).json(relatedProducts)
    } catch (error) {
        next(error)
    }
}

export { getProducts, createProduct, getProductDetail, getRelatedProduct };