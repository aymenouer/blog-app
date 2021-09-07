export const LoginStart = (userData) => ({
    type:"LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload:user,


});

export const LoginFailure = () => ({
    type:"LOGIN_FAILURE"
});

export const Logout = () => ({
    type:"LOGOUT"
});
export const UpdateStart = (userData) => ({
    type:"UPDATE_START"
})

export const UpdateSuccess = (user) => ({
    type:"UPDATE_SUCCESS",
    payload:user,


});

export const UpdateFailure = () => ({
    type:"UPDATE_FAILURE"
});
