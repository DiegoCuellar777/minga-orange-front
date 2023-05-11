import { configureStore } from "@reduxjs/toolkit";
import mangas from './reducers/mangas'
import mangaCards from './reducers/mangaCards'
import save_author from "../redux/reducers/save_author"

const store = configureStore({
    reducer: {
        save_author: save_author,
        inputManga: mangas,
        pageMangas: mangaCards

    }
})

export default store;
