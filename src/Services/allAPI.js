import { commonAPI } from "./commonAPI"
import {SERVER_URL} from "./serverUrl"

// register API
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}

// login API
export const loginAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

// add Project API
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}

// homeproject API
export const getHomeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-projects`,"","")
}

// allProject API
export const getAllProjectAPI = async (SearchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects?search=${SearchKey}`,"",reqHeader)
}

// userprojects API
export const getUserProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
}

// edit projects API
export const editProjectAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/project/edit/${id}`,reqBody,reqHeader)
}

// delete project
export const deleteProjectAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/project/remove/${id}`,{},reqHeader)
}

// user update
export const updateUserProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/user/edit`,reqBody,reqHeader)
}