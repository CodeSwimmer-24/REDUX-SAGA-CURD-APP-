import * as types from "./actionType";

export const loadUserStart = () => ({
    type: types.LOAD_USER_START,
})

export const loadUserSuccess = (users) => ({
   type : types.LOAD_USER_SUCCESS,
   payload: users,
}) 

export const loadUserError = (error) => ({
    type: types.LOAD_USER_ERROR,
    payload: error
})

export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user
})

export const createUserSuccess = () => ({
   type : types.CREATE_USER_SUCCESS,
}) 

export const createUserError = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error
})

export const deleteUserStart = (userId) => ({
    type: types.DELETE_USER_START,
    payload: userId
})

export const deleteUserSuccess = (userId) => ({
   type : types.DELETE_USER_SUCCESS,
   payload: userId
}) 

export const deleteUserError = (error) => ({
    type: types.DELETE_USER_ERROR,
    payload: error
})