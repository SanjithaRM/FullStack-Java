import axios from "axios";
import authHeader from "./authheader";
const BASE_URL = "http://localhost:8080/api/auth/";
/*const getPublicContent = () => {
    return axios.get(API_URL + "all");
};*/
// const getUserBoard = () => {
//     return axios.get(API_URL + "user", { headers: authHeader() });
// };
// const getAdminBoard = () => {
//     return axios.get(API_URL + "admin", { headers: authHeader() });
// };
// export default {
//     //getPublicContent,
//     getUserBoard,
//     getAdminBoard
// };

class User_Service{
    get() {
        return axios.get(BASE_URL + "viewacademy" ,{ headers: authHeader() });
    }
    getcourse(id) {
        // console.log(id)
        return axios.get(BASE_URL + "courses/"+  id 
    
        , { headers: authHeader() });
    }
}
export default new User_Service;