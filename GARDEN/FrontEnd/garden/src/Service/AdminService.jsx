import axios from "axios";
const BASE_URL = 'http://localhost:8989/garden';
export default class AdminService{

    validateAdmin(credentials){
        axios.post(BASE_URL+"/auth/admin/authenticate",credentials)
    }
    adminRegister(register){
        axios.post(BASE_URL+"/auth/admin/register",register);
    }
}
