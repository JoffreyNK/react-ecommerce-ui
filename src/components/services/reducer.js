
import { GETALL, CREATE, GETONE, UPDATE, DELETE } from "./actions"

export const reducer = (state, {type, dataUpdate, payload}) => {
  switch(type){
    case GETALL:
      state[dataUpdate] = payload
      state.message = []
      return state
    case CREATE || UPDATE:
      state.message = []
      state[dataUpdate] = [...state[dataUpdate], payload]
      return  state
    case GETONE:
      state.message = []
      return {...state, singleValue: payload}
    case DELETE:
      state[dataUpdate] = payload
      return {...state, message: payload}
    default: return state
  }
}

export default reducer