import { configureStore } from "@reduxjs/toolkit";
import mangas from './redurcers/mangas'

const store = configureStore({
    reducer: {
        inputManga: mangas
    }
})

export default store