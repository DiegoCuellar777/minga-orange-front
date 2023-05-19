import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

const read_mangas_me = createAsyncThunk('read_mangas_me', async ({ title, cates }) => {
    try {
        let token = localStorage.getItem('token')
        const headers = { headers: { Authorization: `Bearer ${token}` } }
        let res = await axios.get(apiUrl + 'mangas/me', headers)
        console.log(cates)
        return {
            mangas_me: res.data.response,
            cates
        }
    } catch (error) {
        console.log(error)
        return {
            mangas_me: []
        }
    }
})

const delete_mangas_me = createAsyncThunk('delete_mangas_me', async (id) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user.id;
        const token = localStorage.getItem('token')
        const headers = { headers: { Authorization: `Bearer ${token}` } }
        let res = await axios.put(apiUrl + `mangas/${id}`, headers)
        return {
            idArr: id
        }
    } catch (error) {
        return {
            mangas_me: []
        }
    }
})

const actions = { read_mangas_me, delete_mangas_me }
export default actions