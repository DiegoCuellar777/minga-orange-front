import { createAction } from "@reduxjs/toolkit";

const pageMangasCards = createAction('pageMangasCards',(data) => {
        return {
            payload: {
                title: data.title,
                page: data.page
            }
        }
    }
)

const action = { pageMangasCards }

export default action
