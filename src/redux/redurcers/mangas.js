import { createReducer } from "@reduxjs/toolkit";
import mangasAction from '../actions/mangas'

const { readOneManga } = mangasAction

let initialState = {
    cover_photo: ''
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            readOneManga,
            (state,action) => {
                const new_state = {
                    ...state,
                    cover_photo: action.payload.cover_photo,
                    title: action.payload.title,
                    manga_id: action.payload.manga_id
                }
                return new_state
            }
        )
)

export default reducer