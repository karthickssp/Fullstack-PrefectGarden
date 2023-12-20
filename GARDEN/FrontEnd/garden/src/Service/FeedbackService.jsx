import axios from "axios";
const BASE_URL = 'http://localhost:8989/feedback';
export default class FeedbackService{

    saveFeedBack(data){
        return axios.post(BASE_URL+'/post',data);
    }
    getAllFeedback(){
        return axios.get(BASE_URL+'/getall');
    }
}
