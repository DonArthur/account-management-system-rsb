import api from "../api/axios";
import type { User } from "../types/user";

export const updateProfile = (data: User) => {
    return api.put('/api/users/profile', data);
}

export const getProfile = () => {
    return api.get('/api/users/profile');
}

export const uploadAvatar = (file: FormData) => {
    return api.post('/api/upload/avatar', file, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}