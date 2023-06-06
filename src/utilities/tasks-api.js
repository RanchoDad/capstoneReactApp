import sendRequest from "./send-request";
const BASE_URL = '/api/tasks';

export async function tasksIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createTaskRequest(taskData){
    return sendRequest(BASE_URL, "POST", taskData)
}

export async function getTaskRequest(taskId){
    return sendRequest(`${BASE_URL}/${taskId}`) 
}

export async function deleteTaskRequest(taskId){
    return sendRequest(`${BASE_URL}/${taskId}`, "DELETE")
}

export async function updateTaskRequest(taskId, taskData){
    return sendRequest(`${BASE_URL}/${taskId}`, "PUT", taskData)
}