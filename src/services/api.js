import axios from "axios";


// 53610076/json/


const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;

