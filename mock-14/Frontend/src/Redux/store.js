
import { legacy_createStore } from "redux"
import { combineReducers,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { reducer as authreducer } from "./PostReducer/reducer"
import { reducer as quizreducer } from "./QuizReducer/reducer"



const rootReducer=combineReducers({
authreducer ,
quizreducer

})




export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))