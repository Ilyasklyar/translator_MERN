export const userLoginSuccess = (token, userId) => {
    return {
        type: "AUTH_SUCCESS",
        token,
        userId
    }
}

export const userRegisterSuccess = (token, userId) => {
    return {
        type: "USER_CREATE_SUCCESS",
        token,
        userId
    }
}

export const userError = message => {
    return {
        type: "USER_ERROR",
        message
    }
}


export const userLogin = form => {
    return (dispatch) => {
        fetch('/api/auth/login',
            {
                method: 'POST',
                body: JSON.stringify({ ...form }),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    return dispatch(userError(data.message))
                }
                localStorage.setItem('token', data.token)
                localStorage.setItem('userId', data.userId)
                dispatch(userLoginSuccess(data.token, data.userId))
            })
    }
}

export const userRegister = form => {
    return (dispatch) => {
        fetch('/api/auth/register',
            {
                method: 'POST',
                body: JSON.stringify({ ...form }),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    return dispatch(userError(data.message))
                }
                localStorage.setItem('token', data.token)
                localStorage.setItem('userId', data.userId)
                dispatch(userLoginSuccess(data.token, data.userId))
            })
    }
}

export const logoutUser = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    return {
        type: "AUTH_LOGOUT"
    }
}


export const autoLogin = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if (!token) {
            dispatch(logoutUser())
        } else {
            dispatch(userLoginSuccess(token, userId))
        }
    }
}