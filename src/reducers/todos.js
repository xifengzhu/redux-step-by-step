import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, COMPLETE_ALL} from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
    case TOGGLE_TODO:
      return state.map( todo =>
        todo.id == action.id ?  Object.assign({}, todo, {completed: !todo.completed}) : todo
      )

    case DELETE_TODO:
      return state.filter( todo =>
        todo.id !== action.id
      )

    case COMPLETE_ALL:
      const areCompleted = state.every(todo => todo.completed)
      return state.map( todo =>
        Object.assign({}, todo, {completed: !areCompleted})
      )

    default:
      return state
  }
}
