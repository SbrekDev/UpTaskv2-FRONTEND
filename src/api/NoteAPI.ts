import { isAxiosError } from "axios"
import { Note, NoteFormData, Project, Task } from "../types"
import api from "@/lib/axios"

type NoteAPIType = {
    formdata: NoteFormData
    projectId: Project['_id']
    taskId: Task['_id']
    noteId: Note['_id']
}

export async function createNote({projectId, taskId, formdata} : Pick<NoteAPIType, 'formdata' | 'taskId' | 'projectId'>){
    try {
        const url = `/projects/${projectId}/tasks/${taskId}/notes`
        const {data} = await api.post<string>(url, formdata)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function deleteNote({projectId, taskId, noteId} : Pick<NoteAPIType, 'noteId' | 'taskId' | 'projectId'>){
    try {
        const url = `/projects/${projectId}/tasks/${taskId}/notes/${noteId}`
        const {data} = await api.delete<string>(url)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}