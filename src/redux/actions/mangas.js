import { createAction } from "@reduxjs/toolkit";

const readOneManga = createAction(
    'readOneManga',
    (objet) => {
        return {
            payload: {
                cover_photo: objet.cover_photo,
                title: objet.title,
                manga_id: objet.manga_id
            }
        }
    }
)

const action = {readOneManga}

export default action