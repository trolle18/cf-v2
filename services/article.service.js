import { fetchWrapper } from "../helpers"


export const articleService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete,
}

// const apiUrl = window.location.href
const baseUrl = `/articles`

function getAll () {
  return fetchWrapper.get(baseUrl)
}

function getById (id) {
  return fetchWrapper.get(`${baseUrl}/${id}`)
}

function create (params) {
  return fetchWrapper.post(baseUrl, params)
}

function update (id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params)
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete (id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
}