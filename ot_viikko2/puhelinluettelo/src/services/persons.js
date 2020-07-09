import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = NewPerson => {
    const request = axios.post(baseUrl, NewPerson)
    return request.then(response => response.data)
}

const update = (id, NewPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, NewPerson)
    return request.then(response => {
        return response.data
    })
}

const deleteId = (id) => {
    axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deleteId }