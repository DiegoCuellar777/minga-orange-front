import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main.jsx"
import Register from "../pages/Register.jsx";
import LogIn from "../pages/LogIn.jsx"
import Index from "../pages/Index";
import AuthorForm from "../pages/AuthorForm.jsx";

const routes = createBrowserRouter([
    { path: "/", element:<Main/>, children:[
        {path: "/", element: <Index/>},
        {path: "/register", element: <Register/>},
        {path: "/LogIn", element: <LogIn />},
        {path: "/author-form", element: <AuthorForm/>},
    ]}
])

export default routes
