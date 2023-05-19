import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/mangasGet";
const { read_mangas, read_categories } = actions

let initialState = {
    mangas: [],
    categories: [],
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_mangas.fulfilled,
            (state,action) => {
                let newState = {
                    ...state,
                    mangas: action.payload.mangas
                }
                return newState
            }
        )
        .addCase(
            read_categories.fulfilled,
            (state,action) => {
                let newState = {
                    ...state,
                    categories: action.payload.categories
                }
                return newState
            }
        )
)

export default reducer