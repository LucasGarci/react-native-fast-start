
export const CLEAR_DATA = 'CLEAR_DATA'
export const clearData = () => ({
    type: CLEAR_DATA,
})

export const SET_LANGUAGE = 'SET_LANGUAGE'
export const setLanguage = language =>({
    language,
    type: SET_LANGUAGE,
})
