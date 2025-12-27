import api from "../api/axios";

export const getUsers = () => {
    return api.get('/api/users');
}
