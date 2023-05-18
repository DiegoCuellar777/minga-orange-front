import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

let token = localStorage.getItem("token")
let headers = { headers: { "Authorization": `Bearer ${token}` } }

const get_authors = createAsyncThunk('get_authors', async () => {
    try {
        let res = await axios(apiUrl + 'api/authors/admin', headers)
        return {
            authors: res.data.authors
        }
    } catch (error) {
        return {
            authors: []
        }
    }
})

const update_authors = createAsyncThunk('update_authors', async ({ id, data }) => {
    try {
        let res = await axios.put(apiUrl + 'auth/role/author/' + id, data, headers)
        console.log(res.data.update)
        return {
            author: res.data.update,
            active: res.data.update.active
        }
    } catch (error) {
        return {
            authors: []
        }
    }
})

const actions = { get_authors, update_authors }

export default actions
