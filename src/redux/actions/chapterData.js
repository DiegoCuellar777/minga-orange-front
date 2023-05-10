import { createAction } from "@reduxjs/toolkit";

const chapterData = createAction(
    "chapterData",
    (object) => {

        return {
            payload:{
                title: object.title,
                page: object.page,
                _id: object._id
            }
        }
    }
)