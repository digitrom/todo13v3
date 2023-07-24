import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        const promise = todolistApi.getTodo()
        promise.then((res) => {
            console.log(res)
          setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'it-incubator'
    useEffect(() => {
       todolistApi.addTodo(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todoListId = '5cb8b24d-73ec-483e-a6b1-76a2f7b13270'
    useEffect(() => {
      todolistApi.deleteTodo(todoListId).then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const title = 'js'
    const todoListId = '708e674a-06ac-4183-8c58-a9adb83c76b8'
    useEffect(() => {
        todolistApi.updateTodo(todoListId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const getTask = () => {
    const [state, setState] = useState<any>(null)
    const todoListId = '0c22aafd-52c6-4789-93ed-1203c1d57808'
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        const promise = todolistApi.getTask(todoListId)
        promise.then((res) => {
            console.log(res)
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const todoListId = '0c22aafd-52c6-4789-93ed-1203c1d57808'
    const title = 'task 1'
    useEffect(() => {
        todolistApi.addTask(todoListId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

