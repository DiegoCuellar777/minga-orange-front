import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Register from "../pages/Register.jsx";
import LogIn from "../pages/LogIn.jsx";
import Index from "../pages/Index.jsx";
import AuthorForm from "../pages/AuthorForm.jsx";
import MangaForm from "../pages/MangaForm.jsx";
import EditChapter from "../pages/EditChapter.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

let token = localStorage.getItem("token");
let role = JSON.parse(localStorage.getItem("user"))?.role;

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Index /> },
            { path: "/register", element: <Register /> },
            { path: "/LogIn", element: token ? <Index /> : <LogIn /> },
            { path: "/author-form", element: role === 0 ? <AuthorForm /> : <Navigate to="/" /> },
            { path: "/manga-form", element: <MangaForm /> },
            { path: "/chapter-form", element: <EditChapter /> },
        ],
    },{path: "/manga-form", element: token? <MangaForm/> : <ErrorPage/>},
    {
        path: "*", // cualquier ruta desconocida
        element: <Navigate to="/" />, // redirigir a la página de inicio
    },
]);


export default routes;
