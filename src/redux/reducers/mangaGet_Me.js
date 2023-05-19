import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/mangaGet_Me";
const { read_mangas_me, delete_mangas_me, upd_mangas_me } = actions

let initialState = {
  mangas_me: []
}

const reducer = createReducer(
  initialState,
  (builder) => builder.addCase(
    read_mangas_me.fulfilled,
    (state, action) => {
      let newState = {
        ...state,
        mangas_me: []
      }

      if (action.payload.cates?.length > 0) {
        newState.mangas_me = action.payload.mangas_me.filter(
          manga => action.payload.cates.includes(manga.category_id)
        )
      } else {
        newState.mangas_me = action.payload.mangas_me;
      }

      return newState;
    }
  )
    .addCase(
      delete_mangas_me.fulfilled,
      (state, action) => {
        let newState = {
          ...state,
          manga_me: state.mangas_me.filter(each =>
            each._id !== action.payload.idArr
          )
        }
        return newState
      }
    )
    .addCase(
      upd_mangas_me.fulfilled,
      (state, action) => {
        let newState = {
          ...state,
          mangas_me: state.mangas_me.map(each => {
            if (each._id === action.payload.data._id) {
              return action.payload.data
            } else {
              return each
            }
          })
        }
        console.log(newState)
        return newState
      }
    )
);

export default reducer;