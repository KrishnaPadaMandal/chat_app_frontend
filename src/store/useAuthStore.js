import {create} from "zustand"
import {axiousInstanace} from '../lib/axios.js'

export const useAuthStore = create((set)=>({
    authUser:true,
    isSigningUp:false,
    isLoadding:false,
    isUpdatedProfile:false,
    isCheckingAuth:true,
    checkAuth :async () =>{
        try {
            const res = await axiousInstanace.get('/check')
            console.log("User auth check",res)
            set({authUser:res.data})
            
        } catch (error) {
            console.log(" is Auth Check Error",error)
            set({authUser:null})   
        }
        finally{
            set({isCheckingAuth:false})
        }
    },
    signup:""
}))