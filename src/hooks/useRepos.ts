import api from "../api/github";
import {useQuery} from '@tanstack/react-query'
import { Repository } from "./types";

// peticion
async function fetchRepos () {
    const {data} = await api.get<Repository[]>('users/PabloEmv/repos')
    return data
}

// hook usar react query
export function useFethRepositories() {
    // useQuery ingresamos el nombre de los datos y la función que se va a ejecutar
    return useQuery(['repos'], fetchRepos)
}