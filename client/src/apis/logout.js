import axiosInstance from "./axios"
import { setUser } from "../store/userSlice"
import { useDispatch } from "react-redux";

export const useLogout = () => {
    const dispatch = useDispatch();

    const logout = async () => {
        try {
            const response = await axiosInstance.post('client/logout')

            if (response.status === 200) {
                dispatch(setUser(null))
            }
        } catch (error) {
            console.log(error)
        }
    }

    return [logout]
}
