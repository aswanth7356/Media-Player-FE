import { base_url } from "./base_url";
import commonApi from "./commonApi";

// videos
export const addVideo=async (data)=>{
    return await commonApi('POST',`${base_url}/allVideos`,data)
}

export const getVideo=async (data)=>{
    return await commonApi('GET',`${base_url}/allVideos`,'')
}

export const deleteVideo=async (id)=>{
    return await commonApi('DELETE',`${base_url}/allVideos/${id}`,{})
}

// category

export const addCategory=async(data)=>{
    return await commonApi('POST',`${base_url}/category`,data)
}

export const getCategory=async(data)=>{
    return await commonApi('GET',`${base_url}/category`,'')
}

export const deleteCategory=async (id)=>{
    return await commonApi('DELETE',`${base_url}/category/${id}`,{})
}


// adding videos to category

export const getSpecificCategory=async(id)=>{
    return await commonApi('GET',`${base_url}/category/${id}`,'')
}

export const updateCategory=async(id,data)=>{
    return await commonApi('PUT',`${base_url}/category/${id}`,data)
}


// history

export const addHistory=async(data)=>{
    return await commonApi('POST',`${base_url}/history`,data)
}

export const getHistory=async(data)=>{
    return await commonApi('GET',`${base_url}/history`,'')
}

export const deleteHistory=async (id)=>{
    return await commonApi('DELETE',`${base_url}/history/${id}`,{})
}
