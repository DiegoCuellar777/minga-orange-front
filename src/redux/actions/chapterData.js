import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";


// la accion es un intermediario entre la vista y las operaciones de reduccion
// es la que dispara /ejecuta la modificacion, reduccion de los estados globales
const chapterData = createAction(
    "chapterData",      // nombre de la accion
    (object) => {       // funcion que va a enviar datos al reductor
                        // el objeto debe tener todas las propiedades a guardarse
                        // en el estado global
        return {
            payload:{
                title: object.title,
                pageRef: object.pageRef,
                _id: object._id,
                manga_id: object.manga_id
            }
        }
    }
)

const get_chapters = createAsyncThunk("get_chapters", async(manga_id)=> {
    try {
         
        let token = localStorage.getItem("token")
        let headers = { headers: { "Authorization": `Bearer ${token}` } }
        let res = await axios(apiUrl+"chapters/me?manga_id="+ manga_id, headers)

        return {
            chapters: res.data.chapters
        }
    } catch (error) {
        return {
            chapters: []
        }
    }
})

const delete_chapter = createAsyncThunk("delete_category", async({manga_id})=>{
    try {
        let token = localStorage.getItem("token")
        let headers = { headers: { "Authorization": `Bearer ${token}` } }
        let res = await axios.delete(apiUrl+"chapters/"+ manga_id, headers)
        console.log(res);

        return {
            id_to_remove: chapter_id
        }
    } catch (error) {
        return {
            chapters: []
        }
    }
}) 


// Unico objetivo: enviar informacion al reductor
// En el reductor se realiza toda la logica necesaria para modificar/reducir los estados globales

const actions = { chapterData, get_chapters, delete_chapter }
// construye un objeto con la accion (mas adelante se irán agregando más acciones)
export default actions

// Se exporta para poder utilizarlo en los componentes que van a despachar los datos 
// y para configurar la logica del reductor