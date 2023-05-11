import { createAction } from "@reduxjs/toolkit";

const pageMangasCards = createAction('readOneManga',(data) => {
        return {
            payload: {
                id: data.id,
                title: data.title,
                category_id: data.category_id,
                page: data.page,
            }
        }
    }
)

const action = { pageMangasCards }

export default action
