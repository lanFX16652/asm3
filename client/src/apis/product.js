import { useEffect, useState } from "react"
import axiosInstance from "./axios"

export const getProducts = async () => {
    try {
        const result = await axiosInstance.get('product/list')
        return result.data.products
    } catch (error) {
        throw new Error(error)
    }
}

export const useGetProducts = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)

        getProducts().then(products => {
            setProducts(products)
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            throw new Error(error)
        })
    }, [])

    return [products, isLoading]
}

export const getProduct = async (productId) => {
    try {
        const result = await axiosInstance.get(`product/${productId}`)
        return result.data
    } catch (error) {
        throw new Error(error)
    }
}

export const useGetProduct = (productId) => {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getProduct(productId)
            .then(product => {
                setProduct(product)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                throw new Error(error)
            })
    }, [])

    return [product, isLoading]
}

export const getRelatedProducts = async (productId, category) => {
    try {
        const result = await axiosInstance.get('related-product', {
            params: {
                id: productId,
                category: category
            }
        })
        return result.data
    } catch (error) {
        throw new Error(error)
    }
}

export const useGetRelatedProducts = (productId, category) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchRelateProduct = (productId, category) => {
        setIsLoading(true);
        getRelatedProducts(productId, category)
            .then(products => {
                setRelatedProducts(products)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                throw new Error(error)
            })
    }

    return [relatedProducts, fetchRelateProduct, isLoading]
}