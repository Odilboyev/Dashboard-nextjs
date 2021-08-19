import { getTodos } from "../api"
import { SET_ERROR, SET_LOADING, SET_PHOTOS, SET_POSTS, SET_TODOS, SET_USERS, TOGGLE_MENU } from "./types";

const setTodos = async (dispatch, api) => {
    setLoading(dispatch)

    const data = await getTodos(api);

    if (data.data) {
        dispatch({ type: `SET_${api}`, payload: data.data, loading: false, error: false });

    }
    else setError(dispatch)
}

const toggleMenu = (dispatch) => {
    dispatch({ type: TOGGLE_MENU })
}


const setLoading = (dispatch) => {
    dispatch({ type: SET_LOADING })
}
const setError = (dispatch) => {
    dispatch({ type: SET_ERROR })
}

export { setTodos, toggleMenu, setLoading, setError }