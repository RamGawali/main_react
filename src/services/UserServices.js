import axios from "axios";

export async function saveUser(userData){
    try{
        const response=await axios.post("http://127.0.0.1:5900/user",userData);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function fetchUser(){
    try{
        const response=await axios.get("http://127.0.0.1:5900/user");
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function fetchBooks(){
    try{
        const response=await axios.get("http://127.0.0.1:5900/book");
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function saveBooks(){
    try{
        const response=await axios.post("http://127.0.0.1:5900/book");
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function deleteUser(username){
    try{
        const response=await axios.delete(`http://127.0.0.1:5900/user/${username}`)
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function fetchUserByUsername(username){
    try{
        const response=await axios.get(`http://127.0.0.1:5900/user/${username}`)
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function updateUser(username,updatedData){
    try{
        const response=await axios.put(`http://127.0.0.1:5900/user/${username}`,updatedData)
        return response.data;
    }catch(error){
        console.log(error);
    }    
}