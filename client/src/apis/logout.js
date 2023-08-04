import axiosInstance from "./axios"

export const useLogout = () => {
    const logout = async () => {
        try {
            const response = await axiosInstance.post('client/logout')
        } catch (error) {
            console.log(error)
        }
    }

    return [logout]
}
