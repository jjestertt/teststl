import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Layout from "./hoc/Layout/Layout";
import {BrowserRouter, HashRouter} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <Layout/>
        </HashRouter>
    );
}

export default App;
