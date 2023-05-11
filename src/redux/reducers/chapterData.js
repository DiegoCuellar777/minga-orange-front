import { createReducer } from "@reduxjs/toolkit";
//Se importan las acciones
import chapterDataAction from "../actions/chapterData"
//Desestructuro las acciones que necesito configurar 
const { chapterData } = chapterDataAction
//Defino estado inicial 
let initial_state = {
    title: "",
    pageRef: 0,
    _id: "",
    manga_id: ""
}

const reducer = createReducer(
    initial_state,
    (builder) => builder            //funcion constructora de casos
        .addCase(                   //cada caso implica un cambio de estado para una accion
            chapterData, 
            (state, action) => {    //Funcion que depende del estado y de la accion y es la encargada de manejar la logica de reduccion/modificacion 
                const new_state = {
                    ...state,
                    title: action.payload.title,
                    pageRef: action.payload.pageRef,
                    _id: action.payload._id,
                    manga_id: action.payload.manga_id 
                }
                return new_state
            }
        )
)

export default reducer