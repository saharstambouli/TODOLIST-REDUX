import { ADD_TASK, DELETE_TASK, TOOGLE_TASK, UPDATE_TASK } from "../constants/actionsTypes"



const initialstate =
{
    tasks: [],
}

const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, { ...action.payload }] };

        case UPDATE_TASK:
            return { ...state, tasks: state.tasks.map((task) => task.id === action.payload.id ? { ...action.payload } : task) }

        case DELETE_TASK:
            return { ...state, tasks: state.tasks.filter((task) => task.id != action.payload) };

        case TOOGLE_TASK:
            return { ...state, tasks: state.tasks.map((task) => task.id === action.payload ? { ...task, isDone: !task.isDone } : task) }

        default:
            return {...state};
    }
}

export default Reducer;