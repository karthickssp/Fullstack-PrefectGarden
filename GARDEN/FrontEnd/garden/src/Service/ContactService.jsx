import axios from "axios";
const BASE_URL = 'http://localhost:8989/contact';
export default class ContactService{

    saveContact(data){
        return axios.post(BASE_URL+'/post',data);
    }
    getAllContact(){
        return axios.get(BASE_URL+'/getall');
    }
}
