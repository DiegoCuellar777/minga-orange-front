import Main from "./layouts/Main"
import Index from "./pages/Index";
import AuthForm from "./pages/AuthForm";

import "./App.css";
import apiUrl from "../api";

function App() {
    console.log(import.meta.env.VITE_API);
    return (
        <div>
            <Main>
                <Index />
                <AuthForm />
            </Main>
        </div>
    );
}

export default App;
