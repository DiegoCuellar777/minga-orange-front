import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

let token = localStorage.getItem("token")
let headers = { headers: { "Authorization": `Bearer ${token}` } }

const get_companies = createAsyncThunk('get_companies', async () => {
    try {
        let res = await axios(apiUrl + 'api/companies/admin', headers)
        return {
            companies: res.data.companies
        }
    } catch (error) {
        return {
            companies: []
        }
    }
})

const update_companies = createAsyncThunk('update_companies', async ({ id, data }) => {
    try {
        let res = await axios.put(apiUrl + 'auth/role/company/' + id, data, headers)
        console.log(res.data.update)
        return {
            company: res.data.update,
            active: res.data.update.active
        }
    } catch (error) {
        return {
            companies: []
        }
    }
})

const actions = { get_companies, update_companies }

export default actions
