import { createReducer } from "@reduxjs/toolkit";
import action from "../actions/inputs_mangaForm";

const { createMangaForm } = action

const initialState = {
    title: "",
    category: "",
    description: ""
}

const reducer = createReducer(
    initialState, (builder) => builder
        .addCase(
            createMangaForm,
            (state, action) => {
                const new_state = {
                    ...state,
                    title: action.payload.title,
                    category: action.payload.category,
                    description: action.payload.description
                }
                return new_state
            }
        )
    )

export default reducer