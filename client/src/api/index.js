const baseUrl = 'http://localhost:8000/'

const apiGet = (url) => {
    return fetch(`${baseUrl}${url}`).then(response => response.json())
}

export default apiGet