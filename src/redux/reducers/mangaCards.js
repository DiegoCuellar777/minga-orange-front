import { createReducer } from "@reduxjs/toolkit";
import mangaCards from '../actions/mangasCards'


const { pageMangasCards } = mangaCards

let initialState = {
    page: '',
    category_id: '',
    title: '',
    id: '',
}

const reducer = createReducer( 
    initialState, (builder) => builder
        .addCase(
            pageMangasCards,
            (state, action) => {
                const new_state = {
                    ...state,
                    id: action.payload.id,
                    title: action.payload.title,
                    category_id: action.payload.category_id,
                    page: action.payload.page,
                }
                return new_state
            }
        )
    )

export default reducer