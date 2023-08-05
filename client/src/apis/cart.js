import { useState } from "react"
import axiosInstance from "./axios"

const _addToCart = async (productId, qty) => {
    try {

        const response = await axiosInstance.post('client/add-to-cart', {
            productId,
            qty
        })

        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

export const useAddToCart = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const addToCart = ({ productId, qty, onSuccess }) => {
        setIsLoading(true)

        _addToCart(productId, qty)
            .then(result => {
                setIsSuccess(true)
                setIsLoading(false)
                onSuccess()
            })
            .catch(error => {
                console.error(error)
            })
    }

    return { addToCart, isLoading, isSuccess }
}