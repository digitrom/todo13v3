import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // 'API-KEY': '1xxxxxx'
    }
})

export const todolistApi = {

    get() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    addTodo(title: string) {
        return instance.post<CreateTodolistType<{ item: TodolistType }>>('todo-lists', {title})
    },
    deleteTodo(todoListId: string) {
        return instance.delete<CreateTodolistType>(`/todo-lists/${todoListId}`)
    },
    updateTodo(todoListId: string, title: string) {
        return instance.put<CreateTodolistType>(`todo-lists/${todoListId}`, {title})
    }
}
type TodolistType = {
    addedDate:string
    id: string
    order: number
    title: string
}

type CreateTodolistType<T = {}> = {
    data: T
    resultCode: number
    messages: string[],
    fieldsErrors: string[]
}
