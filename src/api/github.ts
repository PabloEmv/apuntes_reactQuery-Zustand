import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.github.com'
})


export default api

// de esta forma evitamos esccribir la url completa ej
/* 
    axios.get('https://api.github.com/xyz')
    
    lo escribiriamos simplemente como
    axios.get('/xyz')

*/