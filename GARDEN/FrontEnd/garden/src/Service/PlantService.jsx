import axios from "axios";
const PLANT_URL='http://localhost:8989/garden/plant';
export default class PlantService{

    getAllPlant(){
        const token = localStorage.getItem("admin_auth");
        return axios.get(PLANT_URL+'/getall',{
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });
    }
    getPlantById(id){
        const token = localStorage.getItem("admin_auth");
        return axios.get(PLANT_URL+'/get/'+id,{
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });
    }
    getAllPlants(){
        const token = localStorage.getItem("auth");
        return axios.get(PLANT_URL+'/getall',{
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });
    }
    getSinglePlantById(id){
        const token = localStorage.getItem("auth");
        return axios.get(PLANT_URL+'/get/'+id,{
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });
    }

    savePlant(plant){
        const token = localStorage.getItem("admin_auth");
        return axios.post(PLANT_URL+'/post',plant,{
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });
    }
    deletePlant(id){
        const token = localStorage.getItem("admin_auth");
        return axios.delete(PLANT_URL+'/delete/'+id,{
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });
    }
    updatePlant(id,plant){
        const token = localStorage.getItem("admin_auth");
        return axios.put(PLANT_URL+'/update/'+id,plant,{
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${token}`
            }
        });
    }
}
