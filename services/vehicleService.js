/*jshint esversion:6*/
import axios from '../http-common';



class vehicleService {
    getAll() {
        return axios.get("/vehicles");
    }
    get(id) {
        return axios.get(`/vehicles/${id}`);
    }
    create(vehicle) {
        return axios.post('/vehicles', vehicle);
    }
    update(id, data) {
        return axios.put(`/vehicles/${id}`, data);
    }
    delete(id) {
        return axios.delete(`/vehicles/${id}`);
    }

}
export default new vehicleService();