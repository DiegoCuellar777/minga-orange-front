import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main.jsx"
import Register from "../pages/Register.jsx";
import LogIn from "../pages/LogIn.jsx"
import Index from "../pages/Index";
import AuthorForm from "../pages/AuthorForm.jsx";
import MangaForm from "../pages/MangaForm.jsx";

let token = localStorage.getItem("token")

const routes = createBrowserRouter([
    { path: "/", element:<Main/>, children:[
        {path: "/", element: <Index/>},
        {path: "/register", element: <Register/>},
        {path: "/LogIn", element: token? <Index />: <LogIn />},
        {path: "/author-form", element: <AuthorForm/>},
        {path: "/manga-form", element: <MangaForm/>},
    ]}
])

export default routes
