import { configureStore } from "@reduxjs/toolkit";
import mangas from './reducers/mangas'
import save_author from "../redux/reducers/save_author"

const store = configureStore({
    reducer: {
        save_author: save_author,
        inputManga: mangas

    }
})

export default store;
