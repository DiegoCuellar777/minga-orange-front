import { createAction } from "@reduxjs/toolkit";

const pageMangasCards = createAction('pageMangasCards',(data) => {
        return {
            payload: {
                title: data.title,
            }
        }
    }
)

const action = { pageMangasCards }

export default action
