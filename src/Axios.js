import axios from "Axios"
const axiosInstance=axios.create({
    baseURL:" http://localhost:4000"
}
)
export default axiosInstance