import axiosInstance from "./axios";
import { useState } from 'react'

export const signup = async (fullname, email, password, phone) => {
    try {

        const result = await axiosInstance.post("client/signup", {
            fullname,
            email,
            password,
            phone
        });
        return result.data
    } catch (error) {
        throw new Error(error)
    }
}

export const useSignup = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUseSignup = (fullname, email, password, phone) => {
        setIsLoading(true);
        signup(fullname, email, password, phone)
            .then(user => {
                setUser(user);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                throw new Error(error);
            })
    }

    return [user, fetchUseSignup, isLoading];
}

export const login = async (email, password) => {
    try {
        const result = await axiosInstance.post("client/login", {
            email,
            password
        })
        return result.data
    } catch (error) {
        throw new Error(error)
    }
}

export const useLogin = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUseLogin = (email, password) => {
        setIsLoading(true);
        login(email, password)
            .then(user => {
                setCurrentUser(user);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error)
            })
    }

    return [currentUser, fetchUseLogin, isLoading];
}