import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function toggleTodo(id){
  return {type: types.TOGGLE_TODO, id}
}

export function deleteTodo(id){
  return {type: types.DELETE_TODO, id}
}

export function completeAll(id){
  return {type: types.COMPLETE_ALL, id}
}


