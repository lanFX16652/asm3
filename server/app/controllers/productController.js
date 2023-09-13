
import mongoose from 'mongoose'
import ProductModel from '../models/productModel.js'

const ObjectId = mongoose.Types.ObjectId
const category = [
    {
        name: "apple",
        image: "http://localhost:5000/product_1.png",
    },
    {
        name: "iphone",
        image: "http://localhost:5000/product_2.png",
    },
    {
        name: "ipad",
        image: "http://localhost:5000/product_3.png",
    },
    {
        name: "watch",
        image: "http://localhost:5000/product_4.png",
    },
    {
        name: "airpods",
        image: "http://localhost:5000/product_5.png",
    },
];

const getProducts = async (req, res, next) => {
    const { page, limit, search } = req.query

    const findOptions = search ? {
        name: {
            $regex: search,
            $options: 'i'
        }
    } : {}

    try {
        const products = await ProductModel.find(findOptions).skip((page - 1) * limit).limit(limit)
        const totalProducts = await ProductModel.count(findOptions)
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

const getCategory = async (req, res) => {
    res.json({ category: category })
}

export { getProducts, createProduct, getProductDetail, getRelatedProduct, getCategory };