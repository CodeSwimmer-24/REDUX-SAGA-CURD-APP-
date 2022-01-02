import axios from "axios";

export const loadingUserApi = async () => await axios.get('http://localhost:3000/api/inventory/asset');
