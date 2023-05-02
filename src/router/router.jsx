import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Layout from "../layouts/Main.jsx"
import Register from "../pages/Register.jsx";
import LogIn from "../pages/LogIn.jsx"


const routes = createBrowserRouter([
    { path: "/", element:<Layout/>, children:[
        {path: "/", element: <App/>},
        {path: "/register", element: <Register/>},
        {path: "/LogIn", element: <LogIn />}
    ]}
])

export default routes