import axios from "axios";
const VIEW_URL = "http://localhost:8080/api/auth/admin/viewInstitutes";
const CREATE_URL = "http://localhost:8080/api/auth/admin/addInstitutes";
const EDIT_URL = "http://localhost:8080/api/auth/admin/editInstitute";
const DELETE_URL = "http://localhost:8080/api/auth/admin/deleteInstitute";
class Academy_Service {
    get() {
        return axios.get(VIEW_URL);
    }
    create(academy) {
        return axios.post(CREATE_URL, academy)
    }
    getuserbyId(academyId) {
        return axios.get(VIEW_URL + "/" + academyId)
    }
    update(academyId, academy) {
        return axios.put(EDIT_URL + "/" + academyId, academy)
    }
    delete(academyId) {
        return axios.delete(DELETE_URL + "/" + academyId);
    }
}

export default new Academy_Service;