import Main from "./layouts/Main.jsx"
import Index from "./pages/Index.jsx";

import "./App.css";
import apiUrl from "../api";

function App() {
    console.log(apiUrl)
    console.log(import.meta.env.VITE_API);
    return (
        <div>
            <Main>
                <Index />
            </Main>
        </div>
    );
}

export default App;
