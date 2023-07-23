import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        // 'API-KEY': '1xxxxxx'
    }
}
export const todolistApi = {

    get() {
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
    },
    addTodo(title: string) {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
    },
    deleteTodo(todoListId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListId}`, settings)
    },
    updateTodo(todoListId: string, title: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListId}`, {title}, settings)
    }


}