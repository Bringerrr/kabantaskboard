import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// Example
// export const userAPI = {
//   getAll: () => api.get('/users'),
//   getById: (id) => api.get(`/users/${id}`),
//   create: (user) => api.post('/users', user),
//   update: (id, user) => api.put(`/users/${id}`, user),
//   delete: (id) => api.delete(`/users/${id}`)
// };
