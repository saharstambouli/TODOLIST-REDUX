import { ADD_TASK, DELETE_TASK, TOOGLE_TASK, UPDATE_TASK } from "../constants/actionsTypes"

export const AddTask=(task)=>({
    type:ADD_TASK,
    payload:task})

export const UpdateTask=(updatedTask)=>({
    type:UPDATE_TASK,
    payload:updatedTask});

export const DeleteTask=(id)=>({
    type:DELETE_TASK,
    payload:id});

export const ToogleTask=(id)=>({
    type:TOOGLE_TASK,
    payload:id});