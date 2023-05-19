import { configureStore } from "@reduxjs/toolkit";

import { reducer as mangasReducer, reducerAsync as mangaReducerAsync } from './reducers/mangas';
import mangaCards from './reducers/mangaCards';
import save_author from "../redux/reducers/save_author";
import {reducer as chapterReducer, reducer_get_chapters } from "./reducers/chapterData";
import inputs_mangaForm from './reducers/inputs_mangaForm';
import mangasGet_reducer from './reducers/mangasGet'
import mangasGetMe_reducer from './reducers/mangaGet_Me'


const store = configureStore({
    reducer: {
        save_author: save_author,
        inputManga: mangasReducer,
        dataChapter: chapterReducer,
        pageMangas: mangaCards,
        manga: mangaReducerAsync,
        chapters: reducer_get_chapters 
        mangaForn: inputs_mangaForm,
        mangasGet_reducer,
        mangasGetMe_reducer

    }
});

export default store;
