
import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        // 'API-KEY': '1xxxxxx'
    }
        // это св-во объекта  config?, котрый может передаваться вторым пар-м в get запрос, и если true -
        // то браузер автоматически проверяяет хранилище кук, и если она есть, то цепляет ее к заголовку запроса (request header) на бэк
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        console.log('RENDER1')
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        promise.then((res) => {
            console.log('RENDER2')
    setState(res.data)
})
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'it-incubator'

    useEffect(() => {
        axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todoListId = '13efccca-c54d-4150-94b4-9ab4b2fe7102'
    useEffect(() => {
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListId}`, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const title = 'it'
    const todoListId = '708e674a-06ac-4183-8c58-a9adb83c76b8'
    useEffect(() => {
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListId}`, {title}, settings)
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

