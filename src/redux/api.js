import axios from "axios";

export const loadingUserApi = async () => await axios.get('http://localhost:3000/api/inventory/asset');

export const creatingUserApi = async (user) => await axios.post('http://localhost:3000/api/inventory/asset',user);

export const deleteUserApi = async (userId) => await axios.delete(`http://localhost:3000/api/inventory/asset/${userId}`);