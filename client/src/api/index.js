const baseUrl = '/'

const apiGet = (url) => {
    return fetch(`${baseUrl}${url}`).then(response => response.json())
}

export default apiGet