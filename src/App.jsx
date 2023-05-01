import Main from "./layouts/Main"
import Index from "./pages/Index";
import AuthorForm from "./pages/AuthorForm";

import "./App.css";
import apiUrl from "../api";

function App() {
    console.log(import.meta.env.VITE_API);
    return (
        <div>
            <Main>
                <Index />
                <AuthorForm />
            </Main>
        </div>
    );
}

export default App;
