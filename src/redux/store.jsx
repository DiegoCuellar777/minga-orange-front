import { configureStore } from "@reduxjs/toolkit";
import mangas from './reducers/mangas'
import mangaCards from './reducers/mangaCards'
import save_author from "../redux/reducers/save_author"
import chapterData from "./reducers/chapterData"
import inputs_mangaForm from './reducers/inputs_mangaForm'
import companies from './reducers/companies'
import authors from './reducers/authors'

const store = configureStore({
    reducer: {
        save_author: save_author,
        inputManga: mangas,
        dataChapter: chapterData,
        pageMangas: mangaCards,
        mangaForn: inputs_mangaForm,
        companies: companies,
        authors: authors
    }
})

export default store;
