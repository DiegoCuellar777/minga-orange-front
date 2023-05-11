import { createAction } from "@reduxjs/toolkit";

const createMangaForm = createAction('createMangaForm',(data) => {
    return {
        payload: {
            title: data.title,
            category: data.category_id,
            description: data.description
        }
    }
}
)

const action = { createMangaForm }
export default action

