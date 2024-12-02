import  axios from "axios"

export const axiousInstanace = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

// export const axiosInstance = axios.create({
//     baseURL: "http://localhost:5000/api/auth", 
//     withCredentials: true,
// });
