import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // 'API-KEY': '1xxxxxx'
    }
})

export const todolistApi = {

    getTodo() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    addTodo(title: string) {
        return instance.post<AllTodolistResponseType<{ item: TodolistType }>>('todo-lists', {title})
    },
    deleteTodo(todoListId: string) {
        return instance.delete<AllTodolistResponseType>(`/todo-lists/${todoListId}`)
    },
    updateTodo(todoListId: string, title: string) {
        return instance.put<AllTodolistResponseType>(`todo-lists/${todoListId}`, {title})
    },
    getTask(todoListId:string) {
        return instance.get<TaskType[]>(`todo-lists/${todoListId}/tasks`)
    },
    addTask(todoListId: string, title: string) {
        return instance.post<AllTaskResponseType<{ item: TaskType }>>(`todo-lists/${todoListId}/tasks`, {todoListId,title})
    },
    deleteTask(todoListId: string, taskId:string) {
        return instance.delete<AllTaskResponseType>(`/todo-lists/${todoListId}/tasks/${taskId}`)
    },
    updateTask(todoListId: string, taskId:string, completed: boolean) {
        return instance.put<AllTaskResponseType>(`todo-lists/${todoListId}`, {todoListId, taskId, completed})
    }
}

type TodolistType = {
    addedDate: string
    id: string
    order: number
    title: string
}

type AllTodolistResponseType<T = {}> = {
    data: T
    resultCode: number
    messages: string[],
    fieldsErrors: string[]
}

type TaskType = {
    items: []
    error: null
    totalCount: 0
}

type AllTaskResponseType<T ={}> = {
    data: T
    resultCode: number
    messages: string[]
}