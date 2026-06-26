
import baseURL from "./Api"

const LoginFunc = async(userData)=>{
        try{
            const response = await baseURL.post("/user/login",userData);
            return response.data
        }catch(err){
            return err.response.data
        }
}

export default LoginFunc;