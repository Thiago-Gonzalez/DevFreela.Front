export const onReponseSuccess = (reponse) => {
    return {
            data: reponse.data
    }
}

export const onReponseError = (error) => {
    return Promise.reject(error?.response?.data)
}