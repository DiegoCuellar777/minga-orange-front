import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

const read_mangas = createAsyncThunk('read_mangas', async ({ title, idArr, currentPage }) => {

    try {
        let token = localStorage.getItem('token')
        const headers = { headers: { Authorization: `Bearer ${token}` } }
        let res = await axios.get(apiUrl + 'mangas', headers)
        return {
            mangas: res.data.response
        }
    } catch (error) {
        return {
            mangas: []
        }
    }
})

const read_categories = createAsyncThunk('read_categories', async () => {
    try {
        let res = await axios.get(apiUrl + 'categories')
        return {
            categories: res.data.categories
        }
    } catch (error) {
        return {
            categories: []
        }
    }
})

const actions = { read_mangas, read_categories }
export default actions 